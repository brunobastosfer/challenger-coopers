import { User } from '../entities/User';

// DTO  -> DATA TRANSFER OBJECT 

interface ICreateUserDTO {
  email: string
  password: string;
}

interface IUsersRepository {
  create({ email, password }: ICreateUserDTO): any
  findByEmail(email: string): any
}

export { ICreateUserDTO, IUsersRepository }