import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x1aFd38193f88369F97B32F4138768a89c1aD5878'
);

export default  inst;