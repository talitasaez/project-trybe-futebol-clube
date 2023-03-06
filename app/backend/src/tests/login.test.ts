import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test a rota /login', () => {

  const app = new App();
  
  it('Verifica se o login ', async () => {
    const result = await chai.request(app.app).post('/login').send({
      "email": "admin@admin.com",
      "password": "secret_admin"
    });

    expect(result.status).to.be.equal(200);
  });

  it('Verifica se o login com uma senha correta', async () => {
    const result = await chai.request(app.app).post('/login').send({
      "email": "admin@admin.com",
      "password": "999"
    });


    expect(result.status).to.be.equal(401);
    expect(result.body).to.be.deep.equal({ message: 'Invalid email or password'});
  })
});
