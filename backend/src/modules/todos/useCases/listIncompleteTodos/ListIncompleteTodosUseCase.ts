import { Todo } from "../../entities/Todo";

import { ITodosRepository } from "../../repositories/ITodosRepository";

class ListIncompleteTodosUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute(token: string): Promise<Todo[]> {
    const todos = this.todosRepository.listIncompleteTodosByUser(token);

    if(!todos){
      throw new Error("Don't have incomplete todos")
    };

    return todos;
  }
}

export { ListIncompleteTodosUseCase }