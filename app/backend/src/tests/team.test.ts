
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Team from '../database/models/Team'
import { app } from '../app';
import { Model } from 'sequelize';
import Example from '../database/models/ExampleModel';
import { Response } from 'superagent';

const { expect } = chai;
chai.use(chaiHttp);

describe('Test a rota Teams', () => {

  afterEach(() => {
    sinon.restore();
  });


  it('Teste Get: retornar as lista dos teams', async function ()  {
    const outputMock: Team[] = [{ id: 1, teamName: 'Avaí/Kindermann'}] as unknown as Team[];
    sinon.stub(Model, 'findAll').resolves(outputMock);
    const result = await chai.request(app).get('/teams');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(outputMock);
  });
});
