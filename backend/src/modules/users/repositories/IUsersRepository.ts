import { User } from '../entities/User';

// DTO  -> DATA TRANSFER OBJECT 

interface ICreateUserDTO {
  email: string
  password: string;
  name: string;
}

interface IUsersRepository {
  create({ email, password, name }: ICreateUserDTO): any
  findByEmail(email: string): Promise<User>
}

export { ICreateUserDTO, IUsersRepository }