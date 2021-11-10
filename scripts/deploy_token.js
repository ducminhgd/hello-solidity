const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const contract = await hre.ethers.getContractFactory("HSToken");
  const HSToken = await contract.deploy();
  await HSToken.deployed();
  console.log("token deployed to:", HSToken.address);

  let config = `
export const HSToken = "${HSToken.address}"
`

  let data = JSON.stringify(config)
  fs.writeFileSync('config_erc20_' + HSToken.address + ".js", JSON.parse(data))
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
