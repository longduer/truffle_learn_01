module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks:{
        development: {
            host: "192.168.23.149",
            port:"8545",
            gas: 3000000,
            network_id: "1" //Match any network id
        }
    }
};