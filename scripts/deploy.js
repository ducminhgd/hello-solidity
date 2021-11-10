const { ethers, upgrades } = require("hardhat");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");

// upgradeable deploy
async function main() {
  const tokenAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
  const Market = await ethers.getContractFactory("NFTMarket");
  const marketProxy = await upgrades.deployProxy(Market, [tokenAddress]);
  await marketProxy.deployed();
  console.log("nftMarket deployed to:", marketProxy.address);

  const nftMarketImplAddress = await getImplementationAddress(
    marketProxy.provider,
    marketProxy.address
  );
  await hre.run("verify:verify", { address: nftMarketImplAddress });
  console.log("nftMarket verify:", nftMarketImplAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nftProxy = await upgrades.deployProxy(NFT, [marketProxy.address]);
  await nftProxy.deployed();
  console.log("nft deployed to:", nftProxy.address);

  const nftImplAddress = await getImplementationAddress(
    nftProxy.provider,
    nftProxy.address
  );
  await hre.run("verify:verify", { address: nftImplAddress });
  console.log("nft verify:", nftImplAddress);

  let config = `
  export const nftmarketaddress = "${marketProxy.address}"
  export const nftaddress = "${nftProxy.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
