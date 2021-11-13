import { ListTodosUseCase } from "./ListTodosUseCase";
import { ListTodosController } from "./ListTodosController";
import { TodosRepository } from "../../repositories/implementations/TodosRepository";

export default (): ListTodosController => {

  const todosRepository = new TodosRepository;

  const listTodosUseCase = new ListTodosUseCase(todosRepository)

  const listTodosController = new ListTodosController(listTodosUseCase)

  return listTodosController;

}