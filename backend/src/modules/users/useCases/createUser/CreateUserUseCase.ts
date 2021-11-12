import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  email: string;
  password: string;
}

class CreateUserUseCase {

  constructor(private usersRepository: IUsersRepository){}

  async execute({ email, password }: IRequest): Promise<void>{

    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if(userAlreadyExists){
      throw new Error("Já existe um usuário com este email")
    }

    return this.usersRepository.create({ email, password })

  }
  
}

export { CreateUserUseCase }