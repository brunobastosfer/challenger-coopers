import { Router } from 'express'

import createTodoController from '../modules/todos/useCases/createTodo'
import listTodosController from '../modules/todos/useCases/listTodos'
import editTodoController from '../modules/todos/useCases/editTodo';
import deleteTodoController from '../modules/todos/useCases/deleteTodo';

const todosRouter = Router()

todosRouter.post('/create', (request, response) => createTodoController().handle(request, response))
todosRouter.post('/list', (request, response) => listTodosController().handle(request, response))
todosRouter.put("/edit", (request, response) => editTodoController().handle(request, response))
todosRouter.delete('/delete', (request, response) => deleteTodoController().handle(request, response))

export { todosRouter }