const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledApplication = require('./build/Application.json');

const provider = new HDWalletProvider(
    'access creek gather someone envelope globe media used accuse artist lock catch',
    'https://rinkeby.infura.io/v3/d5860a644ed34a38a59f4d5e58ed6a6c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledApplication.interface))
        .deploy({data: '0x' + compiledApplication.bytecode})
        .send({ gas: '4712388', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);

};

deploy();

