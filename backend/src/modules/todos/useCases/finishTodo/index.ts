import { TodosRepository } from "../../repositories/implementations/TodosRepository";
import { FinishTodoUseCase } from "./FinishTodoUseCase";
import { FinishTodoController } from "./FinishTodoController";

export default (): FinishTodoController => {
  const todosRepository = new TodosRepository()

  const finishTodoUseCase = new FinishTodoUseCase(todosRepository)

  const finishTodoController = new FinishTodoController(finishTodoUseCase)

  return finishTodoController
}