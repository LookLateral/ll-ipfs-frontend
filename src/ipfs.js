//Wsing the infura.io node; we will use our own node/s in production
//Use the recipe below to run a local daemon
// const ipfsApi = require(‘ipfs-api’);
// const ipfs = new ipfsApi(‘localhost’, ‘5001’, {protocol:‘http’});
const IPFS = require('ipfs-api');
const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
});

export default ipfs;