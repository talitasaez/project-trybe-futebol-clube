import * as bcrypt from 'bcryptjs';
import { IUser } from '../interface/InterfaceUser/IUser';
import UserService from '../service/userService';

export default class VerifyPassword {
  static async passDecrypt(email: string, pass: string) {
    const User = await UserService.findUser(email);

    const { password: passInData } = User as IUser;

    const decrypt = bcrypt.compareSync(pass, passInData);

    if (decrypt) return true;
  }
}
