import { ethers } from "ethers";
import { Button, TextInput } from "flowbite-react";
import React, { useState,useEffect } from "react";
import Quoter from './Quoter';
import { useAccount } from 'wagmi'
interface Props {
  // props type definitions here

}
// token address
const wethAddress = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const linkAddress = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB' 

// const uniswapAddress = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'; 
// const usdcAddress = '0x07865c6e87b9f70255377e024ace6630c1eaa37f' 
// const daiAddress = '0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29';

// router
const uniRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
const sushiRouterAddress = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'

const contractAddress = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E"
const abi =   [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addressProvider",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ADDRESSES_PROVIDER",
    "outputs": [
      {
        "internalType": "contract IPoolAddressesProvider",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "POOL",
    "outputs": [
      {
        "internalType": "contract IPool",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      }
    ],
    "name": "allowancePool",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "approvePool",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sell_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "buy_token",
        "type": "address"
      }
    ],
    "name": "checkArbitage",
    "outputs": [
      {
        "internalType": "enum FlashLoanArbitrage.Exchange",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenaddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "premium",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "initiator",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "params",
        "type": "bytes"
      }
    ],
    "name": "executeOperation",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_routerAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "sell_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "buy_token",
        "type": "address"
      }
    ],
    "name": "getAmountsOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenaddress",
        "type": "address"
      }
    ],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenaddress",
        "type": "address"
      }
    ],
    "name": "getBalanceMetaMask",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sell_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "buy_token",
        "type": "address"
      }
    ],
    "name": "makeArbitrage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "requestFlashLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "supplyLiquidity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "weth",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenaddress",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

const Arbitrage: React.FC<Props> = () => {
  const { address, isConnected } = useAccount()

  const [wethValue, setWethValue] = useState('');
  const [depositValue, setDepositValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepositValue(event.target.value);
  };

  useEffect(() => {
    // 在组件挂载时调用一次
    getWethBalance();
    const interval = setInterval(getWethBalance, 1000);
    return () => clearInterval(interval);
  }, [setWethValue]);

  async function getWethBalance() {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner(); 
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        // weth balance
        const wethbalance = await contract.getBalance(wethAddress)
        const wethBalance = ethers.utils.formatUnits(wethbalance, 18)
        setWethValue(wethBalance)

      } catch (e) {
        console.log(e);
      }
  } 
  

  async function depositWeth() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner(); 
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        
        
        const ERC20ABI = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
        const ERC20Contract = new ethers.Contract(wethAddress, ERC20ABI, signer);
   
        const spender = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";  // Address
        const amountToApprove =  ethers.utils.parseEther(depositValue) // bignumber
        const approveTx = await ERC20Contract.approve(spender, amountToApprove)
        console.log("Approve Transaction:", approveTx);

        const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
        await ERC20Contract.transfer(recipient, amountToApprove)

      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }

  async function withdrawWeth() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner(); 
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.withdraw(wethAddress)
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }
  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-2xl font-bold ">Arbitrage</h1>
      {/* <div className="text-base font-normal break-all">
        <b className="text-base font-bold">Contract Address: </b>
        0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E
      </div> */}
      <div className="flex flex-col gap-5 bg-white mx-auto rounded-lg shadow-lg py-8 px-10 md:w-1/2 items-center justify-center">
      <div className="text-base font-normal break-all">
        <b className="text-base font-bold">Weth Balance: </b> {isConnected ? wethValue:0.0}
      </div>
      <div className="text-base font-normal break-normal"><b>Please Deposit Weth token</b></div>
      <TextInput type="text" sizing="md" className="w-40" value={depositValue} onChange={handleInputChange} />
      <Button className="w-32" gradientMonochrome="info" onClick={() => depositWeth()}>Deposit</Button>
      <Button className="w-32" gradientMonochrome="info" onClick={() => withdrawWeth()}>Withdraw</Button>
      </div>
      
      <Quoter tokenAddress="0x326C977E6efc84E512bB9C30f76E30c160eD06FB"/>
    </div>


  );
}


export default Arbitrage;