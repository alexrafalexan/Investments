import web3 from './web3';
import Application from './build/Application.json';

const inst = new web3.eth.Contract(
    JSON.parse(Application.interface),
    '0x0DBa0E05A9ccf3e4A385f05254ADe43c72Aa2087'
);

export default  inst;