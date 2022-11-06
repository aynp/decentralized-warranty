import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const SHARDEUM_RPC : string = process.env.SHARDEUM_RPC || '';
const privateKey : string = process.env.PRIVATE_KEY || '';


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    shardeum: {
      url: SHARDEUM_RPC,
      accounts: [privateKey],
      chainId: 8081,
    }
  },
};

export default config;
