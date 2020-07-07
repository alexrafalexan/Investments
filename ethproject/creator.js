import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xA24Bf294c3150CB075BDd76c7c209F51B1273723'
);

export default  inst;