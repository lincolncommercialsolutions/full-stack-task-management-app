'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card as CardType } from '@/types';

interface CardProps {
  card: CardType;
  onDelete: (cardId: string) => void;
  onEdit: (cardId: string, title: string, description?: string) => void;
}

export function Card({ card, onDelete, onEdit }: CardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 cursor-move hover:shadow-md transition-shadow"
    >
      <h4 className="font-medium text-sm mb-1">{card.title}</h4>
      {card.description && (
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
          {card.description}
        </p>
      )}
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            const newTitle = prompt('Edit title:', card.title);
            const newDesc = prompt('Edit description:', card.description || '');
            if (newTitle) onEdit(card.id, newTitle, newDesc || undefined);
          }}
          className="text-xs text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (confirm('Delete this card?')) onDelete(card.id);
          }}
          className="text-xs text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
