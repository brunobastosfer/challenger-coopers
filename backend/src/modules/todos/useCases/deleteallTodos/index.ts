import { TodosRepository } from "../../repositories/implementations/TodosRepository";
import { DeleteAllTodoUseCase } from "./DeleteAllTodoUseCase";
import { DeleteAllTodoController } from "./DeleteAllTodoController";

export default (): DeleteAllTodoController => {
  const repository = new TodosRepository();

  const deleteAllTodoUseCase = new DeleteAllTodoUseCase(repository);

  const deleteAllTodoController = new DeleteAllTodoController(deleteAllTodoUseCase);

  return deleteAllTodoController
}