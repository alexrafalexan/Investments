import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x5B10ac130d49dF6f0e9800Db96b7030d91303886'
);

export default  inst;