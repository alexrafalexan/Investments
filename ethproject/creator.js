import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xAd0987C83dd94Fb3EFBf8b70C97399d63F0BdeC3'
);

export default  inst;