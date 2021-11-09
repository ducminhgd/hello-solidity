/* hardhat.config.js */
require('dotenv').config();

require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

require('@openzeppelin/hardhat-upgrades');

const privateKey = process.env.SECRET || "6ca7c7c571215dcdc5256fe9606fc791c9e4d432bce7ef3245a4f1102bf49ba2"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      chainId: 3,
      url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
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
    apiKey: "PPXEB2JF9BQJIFTJ2KG4GNTH4XJZGF1456"
  }
}