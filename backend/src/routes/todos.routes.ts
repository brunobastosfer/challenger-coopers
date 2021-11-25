import { Router } from 'express'

import createTodoController from '../modules/todos/useCases/createTodo'
import listTodosController from '../modules/todos/useCases/listCompleteTodos'
import listIncompleteTodosController from '../modules/todos/useCases/listIncompleteTodos'
import editTodoController from '../modules/todos/useCases/editTodo';
import deleteTodoController from '../modules/todos/useCases/deleteTodo';
import finishTodoController from '../modules/todos/useCases/finishTodo';
import deleteallTodos from '../modules/todos/useCases/deleteallTodos';

const todosRouter = Router()

todosRouter.post('/', (request, response) => createTodoController().handle(request, response))
todosRouter.get('/complete', (request, response) => listTodosController().handle(request, response))
todosRouter.get('/incomplete', (request, response) => listIncompleteTodosController().handle(request, response))
todosRouter.put("/", (request, response) => editTodoController().handle(request, response))
todosRouter.delete('/', (request, response) => deleteTodoController().handle(request, response))
todosRouter.delete('/all', (request, response) => deleteallTodos().handle(request, response))
todosRouter.post("/finish", (request, response) => finishTodoController().handle(request, response))

export { todosRouter }