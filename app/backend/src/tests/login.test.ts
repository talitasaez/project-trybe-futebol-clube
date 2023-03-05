import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test a rota /login', () => {

  const app = new App();

  it('Verifica se o login é feito de maneira correta', async () => {
    const result = await chai.request(app.app).post('/login').send({
      "email": "admin@admin.com",
      "password": "secret_admin"
    });

    expect(result.status).to.be.equal(200);
  });

  it('Verifica se o login incorreto traz um erro', async () => {
    const result = await chai.request(app.app).post('/login').send({
      "email": "admin@admin.com",
    });
    expect(result.status).to.be.equal(400);
  })

  it('Verifica se o login com uma senha com menos de 6 digitos retorna um erro', async () => {
    const result = await chai.request(app.app).post('/login').send({
      "email": "admin@admin.com",
      "password": "123"
    });


    expect(result.status).to.be.equal(401);
    expect(result.body).to.be.deep.equal({ message: 'Invalid email or password'});
  })
});
