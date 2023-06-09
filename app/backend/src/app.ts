import * as express from 'express';
import * as cors from 'cors';

import RouteLogin from './route/loginRouter';
import teamRouter from './route/teamRouter';
import matchRouter from './route/matchRouter';
import leaderboardRoutes from './route/leaderboardRouter';

class App {
  public app: express.Express;
  constructor() {
    this.app = express();

    this.config();
    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(cors());
    this.app.use(teamRouter);
    this.app.use('/matches', matchRouter);
    this.app.use(leaderboardRoutes);

    const path = '/';

    this.app.use(
      path,
      new RouteLogin().router,
    );
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}.`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
