import { Router } from 'express'

import createTodoController from '../modules/todos/useCases/createTodo'
import listTodosController from '../modules/todos/useCases/listTodos'

const todosRouter = Router()

todosRouter.post('/create', (request, response) => createTodoController().handle(request, response))
todosRouter.get('/list', (request, response) => listTodosController().handle(request, response))

export { todosRouter }