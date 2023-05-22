import { Contract, ethers } from "ethers";
import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useAccount } from 'wagmi'
interface Props {
  // props type definitions here
  tokenAddress: string;
}





const Quoter: React.FC<Props> = ({ tokenAddress }) => {
  const { address, isConnected } = useAccount()

  const [value, setValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // token address
  const wethAddress = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
  // const linkAddress = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB' // link
  // const uniswapAddress = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'; // uniswap
  // const usdcAddress = '0x07865c6e87b9f70255377e024ace6630c1eaa37f' // usdc


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

  async function getQuoter() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner(); // 获得签名者
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const _amountIn =  ethers.utils.parseEther(value)

        // uni price
        const uniprice = await contract.getAmountsOut(_amountIn, uniRouterAddress,wethAddress,tokenAddress)
        const uniPrice = Number(ethers.utils.formatUnits(uniprice, 18))
        console.log('uniPrice',uniPrice);

        const uni = document.getElementById('uniPrice')
        if (uni) {
          uni.innerHTML = 'UniPrice: ' + uniPrice;
        }

        // sushi price
        const sushiprice = await contract.getAmountsOut(_amountIn, sushiRouterAddress,wethAddress,tokenAddress)
        const sushiPrice = Number(ethers.utils.formatUnits(sushiprice, 18))
        console.log('sushiPrice',sushiPrice);

        const sushi = document.getElementById('sushiPrice')
        if (sushi) {
          sushi.innerHTML = 'SushiPrice: ' + sushiPrice;
        }

        // check arbitage type
        const type = await contract.checkArbitage(_amountIn, wethAddress, tokenAddress)
        console.log(type);
        if (type==0) {
          const arbtype = document.getElementById('type')
          if (arbtype) {
            arbtype.innerHTML = 'Arbitrage Type: ' + 'sell on uni, buy on sushi';
          }
        } else if (type==1) {
          const arbtype = document.getElementById('type')
          if (arbtype) {
            arbtype.innerHTML = 'Arbitrage Type: ' + 'sell on sushi, buy on uni';
          }
        } else {
          const arbtype = document.getElementById('type')
          if (arbtype) {
            arbtype.innerHTML = 'Arbitrage Type: ' + 'no arbitrage opportunity';
          }
        }

      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }

  async function arbitage() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner(); // 获得签名者
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.makeArbitrage(wethAddress,tokenAddress)
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }

  return (
 
      <div className="flex flex-col gap-5 bg-pink-50 mx-40 rounded-lg shadow-lg py-8 w-full md:w-3/5">
        <div className="text-xl mx-auto -mt-3"><b>WETH-LINK</b> </div>
        <div className='border-b-2 border-stone-400 -mt-1'> </div>
        <div className='ml-4 -mt-2'>
          <div id='uniPrice'> <b> UniPrice: </b> 0 </div>
          <div id='sushiPrice'> <b> SushiPrice: </b> 0 </div>
          <div id="type"> <b> Arbitrage Type: </b> </div>
        </div>
        <div className= 'mx-auto w-48'>
          <TextInput
            type="text"
            sizing="md"
            value={value} onChange={handleInputChange} />
          <Button className="mt-3 w-48 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={() => getQuoter()}>Quoter</Button>
          <Button className="mt-3 w-48 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={() => arbitage()}>Arbitage</Button>
        </div>
      </div>



  );
}


export default Quoter;
