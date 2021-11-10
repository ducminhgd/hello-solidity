/* hardhat.config.js */
require('dotenv').config();

require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

require('@openzeppelin/hardhat-upgrades');

const privateKey = process.env.SECRET || "75c7e609de0bfffe34252465dcadbfeb9f06fb0bff254511aa21808258eff0a3"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // Register and create project on infura.io
    rinkeby: {
      chainId: 4,
      url: "https://rinkeby.infura.io/v3/d8429a25f6f6474387180d3d635f3a12",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "K681J45XZ8URZ6YA2Z79TYC17JYBEV7RGE"
  }
}