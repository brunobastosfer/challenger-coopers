import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UserInfoController } from "./UserInfoController";
import { UserInfoUseCase } from "./UserInfoUseCase";

export default (): UserInfoController => {

  const usersRepository = new UsersRepository()

  const userInfoUseCase = new UserInfoUseCase(usersRepository)

  const userInfoController = new UserInfoController(userInfoUseCase)

  return userInfoController

}