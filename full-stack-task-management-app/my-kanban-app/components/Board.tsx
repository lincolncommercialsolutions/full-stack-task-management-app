'use client';

import { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverEvent, closestCorners } from '@dnd-kit/core';
import { List } from './List';
import { Board as BoardType } from '@/types';

interface BoardProps {
  boardId: string;
}

export function Board({ boardId }: BoardProps) {
  const [board, setBoard] = useState<BoardType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBoard = async () => {
    try {
      const response = await fetch(`/api/boards/${boardId}`);
      if (response.ok) {
        const data = await response.json();
        setBoard(data);
      }
    } catch (error) {
      console.error('Error fetching board:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBoard();
  }, [boardId]);

  const handleAddList = async () => {
    const title = prompt('Enter list name:');
    if (!title) return;

    try {
      const response = await fetch('/api/lists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, boardId }),
      });

      if (response.ok) {
        fetchBoard();
      }
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  const handleDeleteList = async (listId: string) => {
    try {
      const response = await fetch(`/api/lists/${listId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBoard();
      }
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const handleAddCard = async (listId: string) => {
    const title = prompt('Enter card title:');
    if (!title) return;
    const description = prompt('Enter card description (optional):');

    try {
      const response = await fetch('/api/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, listId }),
      });

      if (response.ok) {
        fetchBoard();
      }
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      const response = await fetch(`/api/cards/${cardId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBoard();
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleEditCard = async (cardId: string, title: string, description?: string) => {
    try {
      const response = await fetch(`/api/cards/${cardId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        fetchBoard();
      }
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  const handleUpdateCardStatus = async (cardId: string, status: string, priority: string) => {
    try {
      const response = await fetch(`/api/cards/${cardId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, priority }),
      });

      if (response.ok) {
        fetchBoard();
      }
    } catch (error) {
      console.error('Error updating card status:', error);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // Handle card movement
    const cardId = active.id as string;
    const newListId = over.id as string;

    try {
      await fetch(`/api/cards/${cardId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listId: newListId }),
      });

      fetchBoard();
    } catch (error) {
      console.error('Error moving card:', error);
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!board) {
    return <div className="p-8">Board not found</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{board.title}</h2>
      
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto pb-4">
          {board.lists.map((list) => (
            <List
              key={list.id}
              list={list}
              onAddCard={handleAddCard}
              onDeleteList={handleDeleteList}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
              onUpdateCardStatus={handleUpdateCardStatus}
            />
          ))}
          
          <button
            onClick={handleAddList}
            className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg min-w-[280px] max-w-[280px] hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            + Add a list
          </button>
        </div>
      </DndContext>
    </div>
  );
}
