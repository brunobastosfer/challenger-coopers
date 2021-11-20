import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  nome: string;
  token: string;
}

class DeleteTodoUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({ nome, token }: IRequest): Promise<void> {
    const todoExists = await this.todosRepository.findByName(nome)

    if(!todoExists) {
      throw new Error("Todo does not exist");
    }

    await this.todosRepository.removeTodo(nome, token)
  }
}

export { DeleteTodoUseCase }