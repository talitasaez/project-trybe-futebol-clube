import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App, app } from '../app';

import { Model } from 'sequelize';
import { match } from 'assert';

chai.use(chaiHttp);

const { expect } = chai;

const matchMock = [
  {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      },
      {
        "id": 42,
        "homeTeamId": 6,
        "homeTeamGoals": 1,
        "awayTeamId": 1,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "Ferroviária"
        },
        "awayTeam": {
          "teamName": "Avaí/Kindermann"
        }
      }
    
]

describe('Teste endpoint /matches', () => {
 const app = new App();
 afterEach(() => {
  sinon.restore();
 })

//  it('testa se o get retorna times', async () => {
// sinon.stub(, 'findAll').resolves(matchMock as unknown as Model[]);
// const res = await chai.request(app.app).get('/matches');
// expect(res.status).to.be.equal(200);
// expect(res.body).to.be.deep.equal(matchMock)
//  })

})