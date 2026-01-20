export interface User {
  id: string;
  name?: string;
  email?: string;
}

export interface Card {
  id: string;
  title: string;
  description?: string;
  order: number;
  listId: string;
}

export interface List {
  id: string;
  title: string;
  order: number;
  boardId: string;
  cards: Card[];
}

export interface Board {
  id: string;
  title: string;
  userId: string;
  lists: List[];
}
