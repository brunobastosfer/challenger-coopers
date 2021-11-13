import { Todo } from "../entities/Todo";

interface ICreateTodoDTO {
  nome: string;
  concluida: boolean;
  token: string;
}

interface ITodosRepository {
  create({ nome, concluida, token }: ICreateTodoDTO): Promise<void>
  findByName(nome: string): Promise<Todo>
  listTodosByUser(token:any): Promise<Todo[]>
}

export { ICreateTodoDTO, ITodosRepository }