import { ContractWithSigner } from "./ether";

function mintNFT(
  productID : string, 
  serialNo : string, 
  ownerWallet : string, 
  linkIPFS : string
  ) {
  return ContractWithSigner.mintNFT(productID + serialNo, ownerWallet, linkIPFS);
}

export { mintNFT };
