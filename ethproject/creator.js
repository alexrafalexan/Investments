import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x112667270E52c5156F63193DD27893A8a325cBD5'
);

export default  inst;