import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, listId } = await req.json();

    if (!title || !listId) {
      return NextResponse.json(
        { error: "Title and listId are required" },
        { status: 400 }
      );
    }

    // Verify list ownership through board
    const list = await prisma.list.findUnique({
      where: { id: listId },
      include: { board: true },
    });

    if (!list || list.board.userId !== session.user.id) {
      return NextResponse.json({ error: "List not found" }, { status: 404 });
    }

    // Get the highest order value
    const lastCard = await prisma.card.findFirst({
      where: { listId },
      orderBy: { order: "desc" },
    });

    const card = await prisma.card.create({
      data: {
        title,
        description: description || null,
        listId,
        order: (lastCard?.order ?? -1) + 1,
      },
    });

    return NextResponse.json(card, { status: 201 });
  } catch (error) {
    console.error("Error creating card:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
