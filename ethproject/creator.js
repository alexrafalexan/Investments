import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xE6a21e478e72A6c01a1da91ba68eF666e7Ec516C'
);

export default  inst;