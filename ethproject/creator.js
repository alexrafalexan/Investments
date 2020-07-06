import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x8b6864b6994DcA58f897eA7EC1561BAaf4D2E8a7'
);

export default  inst;