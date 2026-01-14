'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card as CardType } from '@/types';

interface CardProps {
  card: CardType;
  onDelete: (cardId: string) => void;
  onEdit: (cardId: string, title: string, description?: string) => void;
  onUpdateStatus: (cardId: string, status: string, priority: string) => void;
}

const priorityColors = {
  low: 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700',
  medium: 'bg-yellow-100 dark:bg-yellow-900 border-yellow-300 dark:border-yellow-700',
  high: 'bg-orange-100 dark:bg-orange-900 border-orange-300 dark:border-orange-700',
  urgent: 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700',
};

const statusIcons = {
  todo: '📋',
  'in-progress': '🔄',
  done: '✅',
};

export function Card({ card, onDelete, onEdit, onUpdateStatus }: CardProps) {
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

  const priority = card.priority || 'medium';
  const status = card.status || 'todo';
  const colorClass = priorityColors[priority as keyof typeof priorityColors] || priorityColors.medium;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-3 rounded-md shadow-sm border-2 cursor-move hover:shadow-md transition-shadow ${colorClass}`}
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-sm flex-1">{card.title}</h4>
        <span className="text-lg ml-2" title={status}>
          {statusIcons[status as keyof typeof statusIcons] || statusIcons.todo}
        </span>
      </div>
      
      {card.description && (
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
          {card.description}
        </p>
      )}
      
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
        <div className="flex gap-1">
          <select
            value={priority}
            onChange={(e) => {
              e.stopPropagation();
              onUpdateStatus(card.id, status, e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
            className="text-xs px-1 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            title="Priority"
          >
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🟠 High</option>
            <option value="urgent">🔴 Urgent</option>
          </select>
          
          <select
            value={status}
            onChange={(e) => {
              e.stopPropagation();
              onUpdateStatus(card.id, e.target.value, priority);
            }}
            onClick={(e) => e.stopPropagation()}
            className="text-xs px-1 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            title="Status"
          >
            <option value="todo">📋 To Do</option>
            <option value="in-progress">🔄 In Progress</option>
            <option value="done">✅ Done</option>
          </select>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newTitle = prompt('Edit title:', card.title);
              const newDesc = prompt('Edit description:', card.description || '');
              if (newTitle) onEdit(card.id, newTitle, newDesc || undefined);
            }}
            className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (confirm('Delete this card?')) onDelete(card.id);
            }}
            className="text-xs text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
