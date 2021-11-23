require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note muscle collect hunt dry flock gate'; 
let testAccounts = [
"0x9c3808688e0182a2e47e8c7fd70bbbd07471891e7012b856485e9013b4716f23",
"0x1931b721c5518dd772f4a5c5db1e097e9c2d526161bec608507af951d0eda14f",
"0x6bb975bedafd31437bd474e11a3e60f7d14f37ad915334708a0b783b6d23dde6",
"0x2e15406318978c4f14149fb2f325bb2b36ab2980805fcf66a7b78a95e92273b0",
"0x584f251934e5cee38c1e00f1917f1c35edcb894456fbe532c7ffde7cce59dab8",
"0x1d15e9a227576ccaab6e725c6f3e1b7b2ff9ade5d380d8111d4c0697e0a38e7c",
"0xeea2f97e0152bc5d58312cc0dff0ca143bf7379efe8ad07cebccabf1c54a9ef0",
"0x4374b6776e766b2288d0012644cebd9e0c9d0be7747289c30a2d269a0109c983",
"0x8bcdda44d2b723090eb263d7016fb934d155f59e07e4ac5da15530e316409870",
"0x487ddd04e306d3335425e518b6e91ec7798fc05460ebd1759604c0722f5faaf4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

