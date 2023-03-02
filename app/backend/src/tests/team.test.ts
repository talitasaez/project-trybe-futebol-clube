import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Team from '../database/models/Team';

import { findAllTeamsMock, findTeamByIdMock } from '../mocks/mockTeam';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota /teams', () => {
  describe('Verifica se todos os times são retornados corretamente', () => {
    let response: Response;

    before(async () => {
      sinon.stub(Team, 'findAll').resolves(findAllTeamsMock as Team[]);

      response = await chai.request(app).get('/teams');
    });

    after(() => {
      sinon.restore();
    });

    it('retorna status 200', () => {
      expect(response.status).to.be.equal(200);
    });

    it('retorna todos os times', () => {
      expect(response.body).to.be.deep.equal(findAllTeamsMock);
    });
  });

  describe('Verifica se um time é retornado corretamente pelo seu id', () => {
    let response: Response;

    before(async () => {
      sinon.stub(Team, 'findByPk').resolves(findTeamByIdMock as Team);

      response = await chai.request(app).get('/teams/4');
    });

    after(() => {
      sinon.restore();
    });

    it('retorna status 200', () => {
      expect(response.status).to.be.equal(200);
    });

    it('retorna o time de id 4', () => {
      expect(response.body).to.be.deep.equal(findTeamByIdMock);
    });
  });

  describe('Verifica se é retornado um erro ao buscar por um id que não existe', () => {
    let response: Response;

    before(async () => {
      sinon.stub(Team, 'findByPk').resolves(null);

      response = await chai.request(app).get('/teams/100');
    });

    after(() => {
      sinon.restore();
    });

    it('retorna status 401', () => {
      expect(response.status).to.be.equal(401);
    });

    it('retorna o time de id 4', () => {
      expect(response.body).to.be.deep.equal({ message: 'Team not found' });
    });
   })
});
function before(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function after(arg0: () => void) {
  throw new Error('Function not implemented.');
}
