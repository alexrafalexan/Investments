import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xdaC1E9b70bDF5d8f87bb2C171B49167DF0c09BCC'
);

export default  inst;