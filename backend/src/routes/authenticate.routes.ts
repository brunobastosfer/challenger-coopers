import { Router } from 'express'
import authenticateUserController from '../modules/users/useCases/AuthenticateUser'

const loginRoute = Router()

loginRoute.post('/', (request, response) => authenticateUserController().handle(request, response))

export { loginRoute }