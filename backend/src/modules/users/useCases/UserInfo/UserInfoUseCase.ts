import { IUsersRepository } from '../../repositories/IUsersRepository'
import { User } from '../../entities/User'

class UserInfoUseCase {
  constructor(private userInfoUseCase: IUsersRepository) {}

  async execute(email: string): Promise<User> {
    const verifyUserExists = await this.userInfoUseCase.findByEmail(email)

    if(!verifyUserExists) {
      throw new Error('Usuário inexistente')
    }

    return verifyUserExists

  }
}

export { UserInfoUseCase }