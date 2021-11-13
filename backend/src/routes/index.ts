import { usersRoutes } from './users.routes';
import { todosRouter } from './todos.routes';
import { loginRoute } from './authenticate.routes';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { Router } from 'express';

const router = Router()

router.use("/users", usersRoutes);
router.use('/todos', ensureAuthenticated,todosRouter);
router.use('/login', loginRoute)

export { router }