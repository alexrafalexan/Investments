const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const investmentsPath = path.resolve(__dirname,'soliditycontract','Investments.sol');
const source = fs.readFileSync(investmentsPath, 'utf8');
const deployfiles = solc.compile(source,1)

