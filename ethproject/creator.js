import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xb42721aAB42668B7a159EFf57C580149b0356C8D'
);

export default  inst;