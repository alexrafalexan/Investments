const assert = require ('assert');
const ganache = require ('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledApplication = require('../ethproject/build/Application.json');
const compiledInvestment = require('../ethproject/build/Investment.json');

let accounts;
let application;
let investmentAddress;
let investment;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    application = await new web3.eth.Contract(JSON.parse(compiledApplication.interface))
        .deploy({data: compiledApplication.bytecode})
        .send({from:accounts[0], gas: '4712388'})

    await application.methods.createInvestment('2','2','3600','100','20','3').send({
       from: accounts[0],
       gas: '4712388'
    });

    const _investmentAddress = await application.methods.getListOfCreatedInvestments().call();
    investmentAddress = _investmentAddress[0];

    investment =await new web3.eth.Contract(JSON.parse(compiledInvestment.interface), investmentAddress);
});

describe('Investment', () =>{
    it('Create Investment from Application Contract', () => {
        assert.ok(application.options.address);
        assert.ok(investment.options.address);
    });

    it('Check creator that is Investment master', async () => {
        const master = await investment.methods.master().call();
        assert.equal(accounts[0], master);
    })

    it('Check accounts that insert the master for Organization added correctly ', async () => {
        await investment.methods.B_AddOrganizations(accounts[1]).send({
            from: accounts[0]
        });
        const isOrganizationAdded = await investment.methods.organizations(accounts[1]).call();
        assert(isOrganizationAdded);
    })
});