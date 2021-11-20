import { Request, Response } from "express";

import { DeleteTodoUseCase } from './DeleteTodoUseCase';

class DeleteTodoController {
  constructor(private deleteTodoUseCase: DeleteTodoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;

    const token = request.user_id;

    try{
      await this.deleteTodoUseCase.execute({ nome, token })

      return response.status(200).json({ message: "Removido com sucesso"})
    }catch(error) {
      return response.status(400).send()
    }
  }
}

export { DeleteTodoController }