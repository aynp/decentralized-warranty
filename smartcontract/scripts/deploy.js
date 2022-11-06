const { ethers } = require('hardhat');

async function main() {
  const DecentralizedWarrantyContract = await ethers.getContractFactory("DecentralizedWarranty");

  const DecentralizedWarranty = await DecentralizedWarrantyContract.deploy();

  await DecentralizedWarranty.deployed();
  console.log(`DecentralizedWarranty contract address: ${DecentralizedWarranty.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
