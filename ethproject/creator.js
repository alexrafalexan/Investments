import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x28B2dC9D95b695a778DBcF242fc8D1e519442FD3'
);

export default  inst;