import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x9FF82C6df2B79Ed9D293d3885EbdBEdCd0b5956a'
);

export default  inst;