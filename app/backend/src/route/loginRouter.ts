import * as express from 'express';
import ControllerLogin from '../Controller/UserController';
import validateLogin from '../middlewares/validationLogin';
import authPasswordEmail from '../middlewares/authPasswordEmail';

export default class RouteLogin {
  public router: express.Router;

  constructor() {
    this.router = express.Router();

    this.router
      .route('/login/role')
      .get(
        validateLogin.verifyToken,
        ControllerLogin.roleUser,
      );

    this.router
      .route('/login')
      .post(
        validateLogin.email,
        validateLogin.password,
        authPasswordEmail.checkLoginInputs,
        ControllerLogin.successLogin,
      );
  }
}
