import { ITodosRepository } from "../../repositories/ITodosRepository";
import { Todo } from '../../entities/Todo';

class ListCompleteTodosUseCase {
  constructor(private listTodosUseCase: ITodosRepository) {}

  async execute(token:string): Promise<Todo[]> {

    const todos = await this.listTodosUseCase.listCompleteTodosByUser(token)

    if(!todos) {
      throw new Error("Don't have complets todos")
    }

    return todos

  }

}

export { ListCompleteTodosUseCase }