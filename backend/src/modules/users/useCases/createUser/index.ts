import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

export default(): CreateUserController => {
  const userRepository = new UsersRepository();

  const createUserUseCase = new CreateUserUseCase(userRepository)

  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}