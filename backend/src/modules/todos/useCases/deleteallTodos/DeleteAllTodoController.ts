import { Request, Response } from 'express';
import { DeleteAllTodoUseCase } from './DeleteAllTodoUseCase';

class DeleteAllTodoController {
  constructor(private deleteAllTodoUseCase: DeleteAllTodoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { concluida } = request.body;
    const token = request.user_id;

    try {
      await this.deleteAllTodoUseCase.execute({concluida, token})
      return response.status(200).json({message: "Remove success!"});
    }catch(err) {
      return response.status(400).json({ message: "Error" });
    }
  }
}

export { DeleteAllTodoController }