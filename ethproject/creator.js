import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x4C0ED5E3BB4c0f6905fD58c663B7577513b8D0Ef'
);

export default  inst;