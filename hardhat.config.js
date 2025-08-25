require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      accounts: process.env.GANACHE_ACCOUNTS ? process.env.GANACHE_ACCOUNTS.split(',') : undefined
    }
  },
};