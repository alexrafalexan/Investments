import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xEc1E628e85A1e078a4F53415098C44dD36427207'
);

export default  inst;