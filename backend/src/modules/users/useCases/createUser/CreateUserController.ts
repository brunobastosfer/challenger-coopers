import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from 'express';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}

  async handle(request: Request, response: Response):Promise<Response> {
    
    const {email, password, name} = request.body;

    try{
      await this.createUserUseCase.execute({ email, password, name })
      return response.status(201).json({message: "Usuário criado com sucesso!"});
    }catch(err){
      return response.status(403).json({message: err.message})
    }

  }
}

export { CreateUserController }