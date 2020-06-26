import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !=='undefined'){ //code run in the browser and metamask is runninig

    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }

    web3 = new Web3(window.web3.currentProvider);


}else{ // code run on the server OR not use metamask
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/d5860a644ed34a38a59f4d5e58ed6a6c' // Infura API
    );
    web3 = new Web3(provider);
}

export default web3;