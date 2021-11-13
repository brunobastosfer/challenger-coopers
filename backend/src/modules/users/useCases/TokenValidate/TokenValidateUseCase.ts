import { IUsersRepository } from "../../repositories/IUsersRepository";

class TokenValidateUseCase {
  constructor(private tokenValidateUseCase: IUsersRepository){}

  async execute({ token: string }) {
    return 'okey'
  }
}

export { TokenValidateUseCase }