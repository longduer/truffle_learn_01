var Web3= require("web3"); //添加以太坊web3.js支持
var contract = require("truffle-contract"); //对node或浏览器端来说，更佳的以太坊合约抽象


//本地Ganache节点支持
var provider = new Web3.providers.HttpProvider("http://192.168.23.71:8545");
//源MetaCoin合约
var Registery = contract(require("./build/contracts/SimpleStorage.json"));
Registery.setProvider(provider);//合约提供注册
Registery.setNetwork('*');//rpcport


var contractInstance;
Registery.deployed().then(function (instance) {
    contractInstance = instance;
    return contractInstance.set(100, {from: '0x7a261075c737163ae2525f271717f3dbf5450b8c'});
}).then(function (result) {
    console.info('result1:' +  JSON.stringify(result));
    return contractInstance.get();
}).then(function (result) {
    console.info('result2:' + result);
}).catch(function (e) {
    console.info(e);
});