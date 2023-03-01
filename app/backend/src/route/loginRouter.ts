import * as express from 'express';
import ControllerLogin from '../Controller/UserController';
import validateLogin from '../middlewares/validationLogin';

export default class RouteLogin {
  public router: express.Router;

  constructor() {
    this.router = express.Router();

    this.router
      .route('/login/validate')
      .get(
        validateLogin.verifyToken,
        ControllerLogin.roleUser,
      );

    this.router
      .route('/login')
      .post(
        validateLogin.email,
        validateLogin.password,
        ControllerLogin.successLogin,
      );
  }
}
