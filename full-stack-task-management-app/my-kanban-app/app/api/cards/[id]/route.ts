import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, listId, order, status, priority, color } = await req.json();

    // Verify ownership through board
    const card = await prisma.card.findUnique({
      where: { id: id },
      include: {
        list: {
          include: { board: true },
        },
      },
    });

    if (!card || card.list.board.userId !== session.user.id) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }

    const updatedCard = await prisma.card.update({
      where: { id: id },
      data: {
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(listId && { listId }),
        ...(order !== undefined && { order }),
        ...(status && { status }),
        ...(priority && { priority }),
        ...(color !== undefined && { color }),
      },
    });

    return NextResponse.json(updatedCard);
  } catch (error) {
    console.error("Error updating card:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

  { params }: { params: Promise<{ id: string }> }
  { params }: { params: Promise<{ id: string }> }
  { params }: { params: Promise<{ id: string }> }
    const { id } = await params;
) {
    const { id } = await params;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify ownership through board
    const card = await prisma.card.findUnique({
      where: { id: id },
      include: {
        list: {
          include: { board: true },
        },
      },
    });

    if (!card || card.list.board.userId !== session.user.id) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }

    await prisma.card.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting card:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
