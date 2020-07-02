import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xc3b73b4eE0b3c7c9433FBeA00719F943454b5545'
);

export default  inst;