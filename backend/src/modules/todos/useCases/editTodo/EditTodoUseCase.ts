import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  nomeAntigo: string;
  novoNome: string;
  token: string;
}

class EditTodouseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({nomeAntigo, novoNome, token}: IRequest): Promise<void> {
    const categoryExists = await this.todosRepository.findByName(nomeAntigo);

    if(!categoryExists) {
      throw new Error("Category not exists!")
    }

    this.todosRepository.editTodo(nomeAntigo, novoNome, token)
  }
}

export { EditTodouseCase }