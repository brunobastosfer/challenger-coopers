import { TodosRepository } from "../../repositories/implementations/TodosRepository";
import { ListIncompleteTodosUseCase } from "./ListIncompleteTodosUseCase";
import { ListIncompleteTodosController } from "./ListIncompleteTodosController";

export default (): ListIncompleteTodosController => {
  const todosRepository = new TodosRepository()

  const listIncompleteTodosUseCase = new ListIncompleteTodosUseCase(todosRepository)

  const listIncompleteTodosController = new ListIncompleteTodosController(listIncompleteTodosUseCase)

  return listIncompleteTodosController
}