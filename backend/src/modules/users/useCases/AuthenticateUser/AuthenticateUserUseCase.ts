import { IUsersRepository } from '../../repositories/IUsersRepository';
import { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  constructor(private authenticateUserUseCase: IUsersRepository) {}

  async execute({email, password}: IAuthenticateRequest): Promise<String> {
    const user = await this.authenticateUserUseCase.findByEmail(email);

    if(!user) {
      throw new Error("Usuário e/ou senha inválidos.")
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Usuário e/ou senha inválidos.")
    }

    const token = sign({
      email: user.email
    },"679b909f8a13b956d9433337878b5200", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token
  }
}

export { AuthenticateUserUseCase }