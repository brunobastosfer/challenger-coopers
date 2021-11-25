import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  concluida: boolean;
  token: string;
}

class DeleteAllTodoUseCase {
  constructor(private repository: ITodosRepository) {}

  async execute({concluida, token}: IRequest): Promise<void> {

    return this.repository.removeAllTodo(concluida, token)

  }
}

export { DeleteAllTodoUseCase }