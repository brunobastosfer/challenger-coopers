import { TodosRepository } from "../../repositories/implementations/TodosRepository";
import { CreateTodoController } from "./CreateTodoController";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

export default(): CreateTodoController => {
  const todoRepository = new TodosRepository()

  const createTodoUseCase = new CreateTodoUseCase(todoRepository)

  const createTodoControler = new CreateTodoController(createTodoUseCase)

  return createTodoControler
  
}