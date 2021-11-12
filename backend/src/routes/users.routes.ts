import { Router } from 'express'
import { CreateUseControler } from '../modules/users/useCases/createUser/CreateUserController'

import createUserController from '../modules/users/useCases/createUser';

const usersRoutes = Router()

usersRoutes.post('/create', (request, response) => createUserController().handle(request, response))

export { usersRoutes }