import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);
const signer = provider.getSigner();
provider.getBlockNumber().then(blockNumber => {
  console.log(blockNumber);
});
export { provider, signer };
