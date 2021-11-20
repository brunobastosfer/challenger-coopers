import { TodosRepository } from "../../repositories/implementations/TodosRepository";
import { DeleteTodoController } from "./DeleteTodoController";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

export default (): DeleteTodoController => {
  const todosRepository = new TodosRepository()

  const deleteTodoUseCase = new DeleteTodoUseCase(todosRepository)

  const deleteTodoController = new DeleteTodoController(deleteTodoUseCase)

  return deleteTodoController
}