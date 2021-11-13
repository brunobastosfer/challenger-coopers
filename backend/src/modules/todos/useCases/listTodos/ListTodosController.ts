import { ListTodosUseCase } from "./ListTodosUseCase";
import { Request, Response } from "express";

class ListTodosController {
  constructor(private listTodosController: ListTodosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.user_id;

    try{
      const todos = await this.listTodosController.execute({ token })
      return response.status(200).json({ todos })
    }catch(error){

    }

  }

}

export { ListTodosController }