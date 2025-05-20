export interface Todo {
  id?: number;
  _id?: string;  // MongoDB uses _id
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: Date;
}