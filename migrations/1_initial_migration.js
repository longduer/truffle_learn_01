var Migrations = artifacts.require("./Migrations.sol");
var SimpeleStorage = artifacts.require("./BlindAuction.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpeleStorage);
};
