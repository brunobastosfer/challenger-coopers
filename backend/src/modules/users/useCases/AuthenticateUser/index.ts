import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

export default (): AuthenticateUserController => {
  
  const usersRepository = new UsersRepository();

  const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)

  const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)

  return authenticateUserController

}