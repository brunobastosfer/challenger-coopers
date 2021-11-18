import { Router } from 'express'

import createUserController from '../modules/users/useCases/createUser';
import userInfoController from '../modules/users/useCases/UserInfo';

const usersRoutes = Router()

usersRoutes.post('/create', (request, response) => createUserController().handle(request, response))
usersRoutes.post('/info', (request, response) => userInfoController().handle(request, response))

export { usersRoutes }