const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  const Voting = await ethers.getContractFactory("Voting");
  const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);
  await Voting_.deployed();

  console.log("Contract deployed by:", deployer.address);
  console.log("Contract address:", Voting_.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
