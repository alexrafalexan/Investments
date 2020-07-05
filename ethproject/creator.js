import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x7f9F18745dF6E3e22125e7392C5135563024bdAC'
);

export default  inst;