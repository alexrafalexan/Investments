import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xd525c5fE55D593dac9FF71AaEC07ed35726704d2'
);

export default  inst;