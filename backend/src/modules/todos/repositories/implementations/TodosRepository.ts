import {getRepository, Repository} from 'typeorm'
import { Todo } from '../../entities/Todo'
import { ICreateTodoDTO, ITodosRepository } from '../ITodosRepository';

class TodosRepository implements ITodosRepository {
  
  private repository: Repository<Todo>

  constructor() {
    this.repository = getRepository(Todo)
  }

  async create({ nome, concluida, token }: ICreateTodoDTO) {
    const todo = this.repository.create({
      nome,
      concluida,
      user_id: token
    })

    await this.repository.save(todo)
  }

  async findByName(nome: string): Promise<Todo> {
    const todo = await this.repository.findOne({ nome })
    return todo;
  }

  async listTodosByUser(token: any): Promise<Todo[]> {
    const todos = await this.repository.find({
      where: {user_id: token}
    })
    return todos
  }
}

export { TodosRepository }