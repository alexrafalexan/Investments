import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xd80c0BB0A9018Aedc37a85B43c81C554113c3ce9'
);

export default  inst;