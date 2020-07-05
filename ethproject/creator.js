import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x2f798E19ac9aF947eeD37005041f620DF77BCfe1'
);

export default  inst;