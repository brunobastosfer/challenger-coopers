import { Request, Response } from 'express';
import { CreateTodoUseCase } from './CreateTodoUseCase';

class CreateTodoController {

  constructor(private createTodoUseCase: CreateTodoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, concluida } = request.body;
    const token = request.user_id;

    try{
      await this.createTodoUseCase.execute({nome, concluida, token})
      return response.status(201).json({message: "Todo criada com sucesso!"})
    }catch(e){
      return response.json({ message: e.message })
    }
  }
}

export { CreateTodoController }