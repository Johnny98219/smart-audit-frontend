"use client";

import { PrismaClient } from "../../../prisma/generated/client";
import ContractCard from "../../components/ui/contract-card";
import Coin from "../../components/ui/coin";

const prisma = new PrismaClient();

const getUsers = async () => {
  try {
    const users = await prisma.contract.findMany();
    console.log("Users: ", users);
    return users;
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

const getContracts = async () => {
  try {
    const contracts = await prisma.contract.findMany();
    console.log('contracts: ', contracts);
    return contracts;
  } catch (error) {
    console.error("Getting user error: ", error.message);
  }
};

const buyContract = async () => {
    try {
      let contractId = 1; 
      let userId = 1;
      const userItem = await prisma.user.findUnique({
          where: {
              id: userId
          },
      });
  
      if (!userItem || !Array.isArray(userItem.contract)) {
          throw new Error("");
      }
  
      const updatedData = [...userItem.contract, contractId];
  
      const updatedUser = await prisma.user.update({
          where: {
              id: userId,
          },
          data: {
              contract: updatedData,
          },
      });
  
      console.log("Updated user: ", updatedUser);
      return updatedUser;
    } catch (error) {
      console.error("Buying contract error: ", error.message);
    }
}

// getContracts();
// getUsers();
// buyContract();

export default function Marketplace() {
    return (
      <main className="relative flex items-center justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen">
        
        <div className="fixed top-105 bottom-6 left-6 right-6 block justify-center items-center opacity-2 rounded-xl pt-6 pl-6 pr-6 pb-6 overflow-y-auto custom-scrollbar bg-[url(/backgrounds/token.svg)] bg-cover bg-center" style={{"backgroundColor": "#151516"}}>
        
          {/* search and sell contact area */}
          <div className="flex w-full h-40 top-0 text-white">
            {/* Search area */}
            <div className="block w-224 h-full border-r border-solid border-gray-700 pr-6">
              <div className="text-2xl"><b>Categories</b></div>
              <div className="flex justify-between mt-7">
                <Coin name="ERC20"/>
                <Coin name="ERC21"/>
                <Coin name="ERC404"/>
                <Coin name="ERC721"/>
                <Coin name="IERC20"/>
                <Coin name="ERC165"/>
                <Coin name="Token"/>
                <Coin name="NFT"/>
              </div>
              <div className="flex justify-between mt-7">
                <input className="h-11 w-4/5 rounded-full text-indent-16" style={{"backgroundColor": "#29292c", "outline": "none"}} type="text" placeholder="Search between smart contarcts"/>
                <button type="button" style={{background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",}} className="py-10rem px-4.75rem rounded-full fon-size-16 text-white">Search</button>
              </div>
            </div>
            {/* sell contact button area */}
            <div className="block w-104 h-full pl-12">
              <div className="text-2xl"><b>Sell your smart contarcts</b></div>
              <p className="font-size-16 mt-3">Sign up today and begin selling your smart contract source codes.</p>
              <button className="w-full h-11 rounded-full fon-size-16 mt-6" type="button" style={{background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",}} >Sell Contract</button>
            </div>
          </div>

          {/* Contract grid area */}
          <div className="flex justify-between w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 mx-0 lg:mx-auto">
            <ContractCard title="ERC20Token" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="Time-Locked Wallet" description="Gas efficient time locked wallet vaults. Stores the tokens and releases them at a later date to the recipients." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="Infinite Auction" description="This smart contract is an extension of the ERC721 standard. It allows users to purchase and mint NFTs, with a maximum supply and wallet limit. The owner can reserve NFTs, withdraw proceeds, and control the sale's activity, price, and wallet limit. It also enables the owner to update the base URI for NFT metadata." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="AggregationRouterV5" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="ERC721" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="ERC20Token" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="Time-Locked Wallet" description="Gas efficient time locked wallet vaults. Stores the tokens and releases them at a later date to the recipients." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="Infinite Auction" description="This smart contract is an extension of the ERC721 standard. It allows users to purchase and mint NFTs, with a maximum supply and wallet limit. The owner can reserve NFTs, withdraw proceeds, and control the sale's activity, price, and wallet limit. It also enables the owner to update the base URI for NFT metadata." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="AggregationRouterV5" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC20" avatar="./preview-avatar/cute_dev.jpg"/>
            <ContractCard title="ERC721" description="ERC20 token with the following features:-Token owners can vote on Governance/DAO proposals.-Premint your total supply.-No minting function. This allows users to comfortably know the future supply of the token. Used with Governance/DAO contracts for voting." standard="ERC721" avatar="./preview-avatar/cute_dev.jpg"/>
          </div>
        </div>
      </main>
    );
}
  