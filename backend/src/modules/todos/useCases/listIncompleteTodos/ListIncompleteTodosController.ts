import { Request, Response } from "express";

import { ListIncompleteTodosUseCase } from "./ListIncompleteTodosUseCase";

class ListIncompleteTodosController {
  constructor(private listIncompleteTodosUseCase: ListIncompleteTodosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.user_id;

    try{
      const todos = await this.listIncompleteTodosUseCase.execute(token)
      return response.status(200).json(todos);
    }catch(err){
      return response.status(400).json({message: err.message});
    }
  }
}

export { ListIncompleteTodosController }