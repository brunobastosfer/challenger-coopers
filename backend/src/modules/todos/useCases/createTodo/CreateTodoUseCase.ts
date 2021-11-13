import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  nome: string;
  concluida: boolean;
  token: string;
}

class CreateTodoUseCase {

  constructor(private todosRepository: ITodosRepository){}

  async execute({ nome, concluida, token }: IRequest): Promise<void> {
    const todoAlreadyExists = await this.todosRepository.findByName(nome)

    if (todoAlreadyExists) {
      throw new Error("Já existe uma todo com esse nome")
    }

    return this.todosRepository.create({ nome, concluida, token })
  }

}

export { CreateTodoUseCase }