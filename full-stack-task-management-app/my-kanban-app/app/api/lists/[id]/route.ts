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

    const { title, order } = await req.json();

    // Verify ownership through board
    const list = await prisma.list.findUnique({
      where: { id: id },
      include: { board: true },
    });

    if (!list || list.board.userId !== session.user.id) {
      return NextResponse.json({ error: "List not found" }, { status: 404 });
    }

    const updatedList = await prisma.list.update({
      where: { id: id },
      data: {
        ...(title && { title }),
        ...(order !== undefined && { order }),
      },
    });

    return NextResponse.json(updatedList);
  } catch (error) {
    console.error("Error updating list:", error);
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
    const list = await prisma.list.findUnique({
      where: { id: id },
      include: { board: true },
    });

    if (!list || list.board.userId !== session.user.id) {
      return NextResponse.json({ error: "List not found" }, { status: 404 });
    }

    await prisma.list.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: "List deleted successfully" });
  } catch (error) {
    console.error("Error deleting list:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
