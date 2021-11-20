import { ListCompleteTodosUseCase } from "./ListCompleteTodosUseCase";
import { Request, Response } from "express";

class ListTodosController {
  constructor(private listTodosController: ListCompleteTodosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.user_id;
    try{
      const todos = await this.listTodosController.execute(token)
      return response.status(200).json({ todos })
    }catch(error){
      return response.status(400).json({message: error.message})
    }

  }

}

export { ListTodosController }