import { UsersRepository } from "../../repositories/implementations/UsersRepository";  
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUseControler } from "./CreateUserController";

export default(): CreateUseControler => {

  const userRepository = new UsersRepository();

  const createUserUseCase = new CreateUserUseCase(userRepository);

  const createUseControler = new CreateUseControler(createUserUseCase);

  return createUseControler

}