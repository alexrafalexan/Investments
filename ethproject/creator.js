import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x0Bb05Cb4e54Ab9BD8c80E6a5349BD1Db40A0E486'
);

export default  inst;