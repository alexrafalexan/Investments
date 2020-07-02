import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x0A266532981bb0b1E53E257560CdA85419663e80'
);

export default  inst;