import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from 'express';

class AuthenticateUserController {
  constructor(private authenticateUserController: AuthenticateUserUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const {email, password} = request.body;

    try{
      const token = await this.authenticateUserController.execute({email, password})
      return response.status(200).json({ token });
    }catch(err) {
      response.json({ message: err.message })
    }
  }
}

export { AuthenticateUserController }