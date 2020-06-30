import web3 from './web3';
import Investment from './build/Investment.json';


export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Investment.interface),
      address
  );
};