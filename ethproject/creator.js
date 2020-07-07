import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xb95fF472b525B1AE868c733273a40587a9851114'
);

export default  inst;