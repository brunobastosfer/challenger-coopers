import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from 'bcryptjs'

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private createUserUseCase: IUsersRepository){}

  async execute({name, email, password}: IRequest): Promise<void>{
    
    const UserAlreadyExists = await this.createUserUseCase.findByEmail(email)

    if(UserAlreadyExists) {
      throw new Error("Este email já está sendo utilizado")
    }

    const passwordHash = await hash(password, 8)

    return this.createUserUseCase.create({ name, email, password: passwordHash })

  }

}

export { CreateUserUseCase }