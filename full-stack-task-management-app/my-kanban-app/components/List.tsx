'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card } from './Card';
import { List as ListType } from '@/types';

interface ListProps {
  list: ListType;
  onAddCard: (listId: string) => void;
  onDeleteList: (listId: string) => void;
  onDeleteCard: (cardId: string) => void;
  onEditCard: (cardId: string, title: string, description?: string) => void;
  onUpdateCardStatus: (cardId: string, status: string, priority: string) => void;
}

export function List({ list, onAddCard, onDeleteList, onDeleteCard, onEditCard, onUpdateCardStatus }: ListProps) {
  const { setNodeRef } = useDroppable({
    id: list.id,
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg min-w-[280px] max-w-[280px] flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{list.title}</h3>
        <button
          onClick={() => {
            if (confirm('Delete this list?')) onDeleteList(list.id);
          }}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          ✕
        </button>
      </div>
      
      <div
        ref={setNodeRef}
        className="flex-1 space-y-2 min-h-[100px]"
      >
        <SortableContext
          items={list.cards.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          {list.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={onDeleteCard}
              onEdit={onEditCard}
              onUpdateStatus={onUpdateCardStatus}
            />
          ))}
        </SortableContext>
      </div>

      <button
        onClick={() => onAddCard(list.id)}
        className="mt-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        + Add a card
      </button>
    </div>
  );
}
