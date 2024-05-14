require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
  defaultNetwork: "hardhat",
  etherscan: {
    // Aquí se usa "123" como placeholder para Lisk Sepolia
    apiKey: {
      "lisk-sepolia": "123"
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com"
        }
      }
    ]
  },
  networks: {
    hardhat: {
      accounts: {
        count: 1200,
        accountsBalance: "100000000000000000000000000"  // 10000 ETH
      },
      allowUnlimitedContractSize: true,
      gas: 9500000,
      mining: {
        auto: true,
        interval: 1
      },
      timeout: 600000
    },
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [PRIVATE_KEY],
      gasPrice: 1000000000,
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
};
