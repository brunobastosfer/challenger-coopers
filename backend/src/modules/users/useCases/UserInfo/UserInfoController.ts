import { Request, Response } from "express";
import { UserInfoUseCase } from "./UserInfoUseCase";

class UserInfoController {
  constructor(private userInfoUseCase: UserInfoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {
      const user = await this.userInfoUseCase.execute(email);
      return response.status(200).json({ email: user.email, name: user.name })
    }catch(err) {
      return response.json({message: err. message })
    }

  }
}

export { UserInfoController }