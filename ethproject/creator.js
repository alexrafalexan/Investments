import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0xfE6f690496779D08dbc0a3758fe0d8D5638FAd92'
);

export default  inst;