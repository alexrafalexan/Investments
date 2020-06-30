import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x76055df4cc11E68E29FcBf844FC719cc18E37Abb'
);

export default  inst;