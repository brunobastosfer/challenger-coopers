import { Request, Response } from 'express';
import { EditTodouseCase } from './EditTodoUseCase';

class EditTodoController {
  constructor(private editTodoUseCase: EditTodouseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    const { nomeAntigo, novoNome } = request.body;

    const token = request.user_id;

    try {
      await this.editTodoUseCase.execute({nomeAntigo, novoNome, token});

      return response.status(201).json({message: "editada com sucecsso!"})
    }catch(err) {
      return response.status(404).json({message: err.message});
    }
  }
}

export { EditTodoController }