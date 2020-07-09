import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x0e1606AD0F0E780258C0412D1A84930dfd64ca8F'
);

export default  inst;