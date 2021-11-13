import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository' 

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({email, password, name}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      password,
      name
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })
    return user;
  }
}

export { UsersRepository }