import { ListCompleteTodosUseCase } from "./ListCompleteTodosUseCase";
import { ListTodosController } from "./ListCompleteTodosController";
import { TodosRepository } from "../../repositories/implementations/TodosRepository";

export default (): ListTodosController => {

  const todosRepository = new TodosRepository;

  const listTodosUseCase = new ListCompleteTodosUseCase(todosRepository)

  const listTodosController = new ListTodosController(listTodosUseCase)

  return listTodosController;

}