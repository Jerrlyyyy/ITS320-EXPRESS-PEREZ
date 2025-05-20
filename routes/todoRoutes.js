import express from 'express';
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  toggleTodoStatus,
  deleteTodo,
  deleteCompletedTodos
} from '../controller/todoController.js';

const router = express.Router();

// Get all todos
router.get('/', getAllTodos);

// Get a specific todo
router.get('/:id', getTodoById);

// Create a new todo
router.post('/', createTodo);

// Update a todo
router.put('/:id', updateTodo);

// Toggle todo completion status
router.patch('/:id/toggle', toggleTodoStatus);

// Delete a todo
router.delete('/:id', deleteTodo);

// Delete all completed todos
router.delete('/completed/all', deleteCompletedTodos);

export { router };