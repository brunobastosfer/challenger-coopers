import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUseControler {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;
    console.log('post')
    try{
      await this.createUserUseCase.execute({ email, password })
      return response.status(201).json({message: "Usuário criado com sucesso"});
    }catch(e) {
      return response.json({message: e.message})
    }
  }
}

export { CreateUseControler }