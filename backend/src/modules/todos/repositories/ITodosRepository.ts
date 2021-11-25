import { Todo } from "../entities/Todo";

interface ICreateTodoDTO {
  nome: string;
  concluida: boolean;
  token: string;
}

interface ITodosRepository {
  create({ nome, concluida, token }: ICreateTodoDTO): Promise<void>
  findByName(nome: string): Promise<Todo>
  editTodo( nomeAntigo: string, novoNome: string, token: string): Promise<void>
  removeTodo(nome: string, token: string): Promise<void>
  finishTodo(nome: string, token: string): Promise<Todo[]>
  listCompleteTodosByUser(token:string): Promise<Todo[]>
  listIncompleteTodosByUser(token:string): Promise<Todo[]>
  removeAllTodo(concluida: boolean, token: string): any
}

export { ICreateTodoDTO, ITodosRepository }