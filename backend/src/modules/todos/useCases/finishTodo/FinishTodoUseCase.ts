import { ITodosRepository } from "../../repositories/ITodosRepository";
import { Todo } from '../../entities/Todo'

interface IRequest {
  nome: string;
  token: string;
}

class FinishTodoUseCase {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({ nome, token }: IRequest): Promise<Todo[]> {
    const todoExists = await this.todosRepository.findByName(nome);

    if(!todoExists) {
      console.log(todoExists);
      throw new Error('Todo does not exists');
    }
    if(todoExists.concluida === true) {
      console.log(todoExists);
      throw new Error("Todo already finish");
    }

    const todoFinish = await this.todosRepository.finishTodo(nome, token)

    return todoFinish
  }
}

export { FinishTodoUseCase }