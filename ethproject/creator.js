import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x6B0A46E2E74d4D3739A64060ce573c8650546a90'
);

export default  inst;