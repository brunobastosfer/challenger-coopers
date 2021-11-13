import { ITodosRepository } from "../../repositories/ITodosRepository";
import { Todo } from '../../entities/Todo';

class ListTodosUseCase {
  constructor(private listTodosUseCase: ITodosRepository) {}

  async execute({ token }: any) {

    const todos = await this.listTodosUseCase.listTodosByUser(token)

    return todos

  }

}

export { ListTodosUseCase }