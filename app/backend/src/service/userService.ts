import User from '../database/models/User';

export default class ServiceLogin {
  static async findUser(email: string) {
    const user = User.findOne({ where: { email } });

    return user;
  }
}
