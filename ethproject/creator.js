import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x26C95f786a854199381A2D6fD87D4Ca26610B2B3'
);

export default  inst;