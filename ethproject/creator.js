import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xa666B82DD978BE5F1df41685695375823f3dfbaa'
);

export default  inst;