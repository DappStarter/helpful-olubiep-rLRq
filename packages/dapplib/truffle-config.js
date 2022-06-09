require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth sad modify give enroll foster gift'; 
let testAccounts = [
"0xc352b5ce06b41c28a224875656e5f678a9a80f9c805003593cc2ae2493420340",
"0x29f7fce4d11635564101655fed2cc0853bd372873ec7c2e461de0f46b3cffdb9",
"0x1e3baef2657c78e2612b10cfb29cd6b5935d2f344efb7724c0538125024e2435",
"0x3035a3349c1943b7f0001afb2d9ec414a5ee2bc1f5c5e70d72617968a4aa7804",
"0x04dffb5717ed5ecdd3b9dd348b3c0e052c5ccfd31581dced4d176a8e02366c71",
"0x212e6336548a1a69e0ba308d65cd0c89522854e05dc8618c4cb53bbc38e58b6b",
"0x2be2a2c9e8b44f9d8f97b9361c3e16f533ab0b56e59afc9425bc69199e4df654",
"0x18f02409f4a058a8ee7ae0c6a6d50b113367c63dbe3f7d44343233c6054ecbcf",
"0x1d4e3570cef10045f2d5cb10d1d914f7835853cf6ec6246e99065b3141cfe592",
"0x1a11c2e83d2f73344d7a7baba0b1a0c0913e2b7e6a9b4e96e6929fabd1a322fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


