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


  async editTodo(nomeAntigo: string, novoNome: string, token: string): Promise<void> {
    let nameUpdate = await this.repository.find({
      where: {
        user_id: token,
        nome: nomeAntigo
      }
    })
    nameUpdate.forEach((item) => {
      if(item.nome === nomeAntigo) {
        item.nome = novoNome
      }
    })
    await this.repository.save(nameUpdate)
  }

  async removeTodo(nome: string, token: string): Promise<void> {
    let getTodo = await this.repository.find({
      where: {
        user_id: token,
        nome: nome
      }
    })
    await this.repository.remove(getTodo)
  }

  async finishTodo(nome: string, token: string): Promise<Todo[]> {
    let concluidaUpdate = await this.repository.find({
      where: {
        user_id: token,
        nome
      }
    })
    concluidaUpdate.forEach((item) => {
      if(item.concluida === false) {
        item.concluida = true 
      }
    });
    await this.repository.save(concluidaUpdate)
    return concluidaUpdate
  }

  async listCompleteTodosByUser(token: string): Promise<Todo[]> {
    const todos = await this.repository.find({
      where: {
        user_id: token,
        concluida: true
      }
    })
    return todos
  }

  async listIncompleteTodosByUser(token: any): Promise<Todo[]> {
    const todos = await this.repository.find({
      where: {
        user_id: token,
        concluida: false
      }
    })
    return todos
  }

  async removeAllTodo( concluida: boolean, token: string ) {
    const todos = await this.repository.find({
      where: {
        user_id: token,
        concluida: concluida,
      }
    })
    await this.repository.remove(todos)
  }

}

export { TodosRepository }