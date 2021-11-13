import { TokenValidateUseCase } from "./TokenValidateUseCase";
import { Request, Response, NextFunction } from 'express'

class TokenValidateController {
  constructor(private tokenValidateController: TokenValidateUseCase){}

  async handle(request: Request, response: Response, next: NextFunction) {
    const token  = request.headers.authorization;
    console.log(token)

    return next()

  }
}

export { TokenValidateUseCase }