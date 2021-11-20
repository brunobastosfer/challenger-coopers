import { TodosRepository } from "../../repositories/implementations/TodosRepository";
import { EditTodouseCase } from "./EditTodoUseCase";
import { EditTodoController } from "./EditTodoController";

export default(): EditTodoController => {
  const todosRepository = new TodosRepository();

  const editTodoUseCase = new EditTodouseCase(todosRepository);

  const editTodoController = new EditTodoController(editTodoUseCase)

  return editTodoController
}