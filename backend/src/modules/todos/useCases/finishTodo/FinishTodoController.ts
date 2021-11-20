import { Request, Response } from 'express';
import { FinishTodoUseCase } from './FinishTodoUseCase';

class FinishTodoController {
  constructor(private finishTodoUseCase: FinishTodoUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;

    const token = request.user_id;

    console.log(nome)

    try{
      const finished = await this.finishTodoUseCase.execute({nome, token})
      return response.status(200).json({message: "Todo concluída!"})
    }catch(err){
      console.log("QUEBRO")
      return response.status(404).json({message: err.message});
    }
  }
}

export { FinishTodoController }