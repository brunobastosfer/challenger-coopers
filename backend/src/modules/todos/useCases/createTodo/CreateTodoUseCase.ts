import { ITodosRepository } from "../../repositories/ITodosRepository";

interface IRequest {
  nome: string;
  concluida: boolean;
  token: string;
}

class CreateTodoUseCase {

  constructor(private todosRepository: ITodosRepository){}

  async execute({ nome, concluida, token }: IRequest): Promise<void> {

    return this.todosRepository.create({ nome, concluida, token })
  }

}

export { CreateTodoUseCase }