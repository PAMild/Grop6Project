import { ethers } from "ethers";
import { useAccount } from 'wagmi'
import { Select, Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useEffect } from 'react';
import { log } from "console";
interface Props {
  // props type definitions here

}

const contractAddress = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E"

const abi = [
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

const FlashLoan: React.FC<Props> = () => {
  const { address, isConnected } = useAccount()


  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // 在组件挂载时调用一次
    getTokenBalance();
    const interval = setInterval(getTokenBalance, 1000);
    return () => clearInterval(interval);
  }, [selectedValue]);

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value);
  }





  const [value, setValue] = useState('');
  const [tokenvalue, setTokenValue] = useState('0');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

  };

  async function getTokenBalance() {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      // await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner(); // 获得签名者
      const accounts = await provider.listAccounts(); // 获取账户列表
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        if (selectedValue == "Weth") {
          const tokenAddress = "0xCCB14936C2E000ED8393A571D15A2672537838Ad"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 18)
          setTokenValue(balance)
        }

        if (selectedValue == "Link") {
          const tokenAddress = "0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 18)
          setTokenValue(balance)
        }

        if (selectedValue == "DAI") {
          const tokenAddress = "0xBa8DCeD3512925e52FE67b1b5329187589072A55"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 18)
          setTokenValue(balance)


        }

        if (selectedValue == "USDC") {
          const tokenAddress = "0x65aFADD39029741B3b8f0756952C74678c9cEC93"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 6)
          setTokenValue(balance)


        }

        if (selectedValue == "WBTC") {
          const tokenAddress = "0x45AC379F019E48ca5dAC02E54F406F99F5088099"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 8)
          setTokenValue(balance)
          // console.log(balance);

        }

        if (selectedValue == "USDT") {
          const tokenAddress = "0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 6)
          setTokenValue(balance)
          // console.log(balance);

        }

        if (selectedValue == "ERUS") {
          const tokenAddress = "0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b"
          const tokenBalance = await contract.getBalance(tokenAddress)
          const balance = ethers.utils.formatUnits(tokenBalance, 2)
          setTokenValue(balance)
          // console.log(balance);

        }
      } catch (e) {
        console.log(e);
      }
  }
  

  async function deposit() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const spender = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E"
        if (selectedValue == "Weth") {
          const tokenAddress = "0xCCB14936C2E000ED8393A571D15A2672537838Ad"
          const decimals = 18
          const amount = value
          console.log('Weth', tokenAddress, decimals, amount);

          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }


        if (selectedValue == "Link") {
          const tokenAddress = "0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29"
          const decimals = 18
          const amount = value
          console.log('Link', tokenAddress, decimals, amount);

          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }

        if (selectedValue == "DAI") {
          const tokenAddress = "0xBa8DCeD3512925e52FE67b1b5329187589072A55"
          const decimals = 18
          const amount = value
          console.log('DAI', tokenAddress, decimals, amount);

          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }

        if (selectedValue == "USDC") {
          const tokenAddress = "0x65aFADD39029741B3b8f0756952C74678c9cEC93"
          const decimals = 6
          const amount = value
          console.log('USDC', tokenAddress, decimals, amount);
          
          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }

        if (selectedValue == "WBTC") {
          const tokenAddress = "0x45AC379F019E48ca5dAC02E54F406F99F5088099"
          const decimals = 8
          const amount = value
          console.log('WBTC', tokenAddress, decimals, amount);
          
          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }

        if (selectedValue == "USDT") {
          const tokenAddress = "0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780"
          const decimals = 6
          const amount = value
          console.log('USDT', tokenAddress, decimals, amount);
          
          
          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }

        if (selectedValue == "ERUS") {
          const tokenAddress = "0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b"
          const decimals = 2
          const amount = value
          console.log('ERUS', tokenAddress, decimals, amount);

          const ERC20Contract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
          const amountToApprove = ethers.utils.parseUnits(amount, decimals);
          await ERC20Contract.approve(spender, amountToApprove)
          const recipient = "0x0B99ff1A7ec96cC46E6c26F0F2828a647447050E";
          await ERC20Contract.transfer(recipient, amountToApprove)
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }


  async function flashLoan() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      // await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner(); // 获得签名者
      const accounts = await provider.listAccounts(); // 获取账户列表
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        if (selectedValue == "Weth") {
          const tokenAddress = "0xCCB14936C2E000ED8393A571D15A2672537838Ad"
          const decimals = 18
          const amount = value
          console.log('Weth', tokenAddress, decimals, amount);

          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }


        if (selectedValue == "Link") {
          const tokenAddress = "0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29"
          const decimals = 18
          const amount = value
          console.log('Link', tokenAddress, decimals, amount);

          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }

        if (selectedValue == "DAI") {
          const tokenAddress = "0xBa8DCeD3512925e52FE67b1b5329187589072A55"
          const decimals = 18
          const amount = value
          console.log('DAI', tokenAddress, decimals, amount);
          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }

        if (selectedValue == "USDC") {
          const tokenAddress = "0x65aFADD39029741B3b8f0756952C74678c9cEC93"
          const decimals = 6
          const amount = value
          console.log('USDC', tokenAddress, decimals, amount);
          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }

        if (selectedValue == "WBTC") {
          const tokenAddress = "0x45AC379F019E48ca5dAC02E54F406F99F5088099"
          const decimals = 8
          const amount = value
          console.log('WBTC', tokenAddress, decimals, amount);
          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }

        if (selectedValue == "USDT") {
          const tokenAddress = "0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780"
          const decimals = 6
          const amount = value
          console.log('USDT', tokenAddress, decimals, amount);
          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }

        if (selectedValue == "ERUS") {
          const tokenAddress = "0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b"
          const decimals = 2
          const amount = value
          console.log('ERUS', tokenAddress, decimals, amount);
          const tokenAmount = ethers.utils.parseUnits(amount, decimals);
          await contract.requestFlashLoan(tokenAddress, tokenAmount)
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }


  async function withdraw() {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      // await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner(); // 获得签名者
      const accounts = await provider.listAccounts(); // 获取账户列表
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        if (selectedValue == "Weth") {
          const tokenAddress = "0xCCB14936C2E000ED8393A571D15A2672537838Ad"
          await contract.withdraw(tokenAddress)
        }

        if (selectedValue == "Link") {
          const tokenAddress = "0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29"
          await contract.withdraw(tokenAddress)
        }

        if (selectedValue == "DAI") {
          const tokenAddress = "0xBa8DCeD3512925e52FE67b1b5329187589072A55"
          await contract.withdraw(tokenAddress)
        }

        if (selectedValue == "USDC") {
          const tokenAddress = "0x65aFADD39029741B3b8f0756952C74678c9cEC93"
          await contract.withdraw(tokenAddress)
        }

        if (selectedValue == "WBTC") {
          const tokenAddress = "0x45AC379F019E48ca5dAC02E54F406F99F5088099"
          await contract.withdraw(tokenAddress)
        }

        if (selectedValue == "USDT") {
          const tokenAddress = "0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780"
          await contract.withdraw(tokenAddress)
        }

        if (selectedValue == "ERUS") {
          const tokenAddress = "0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b"
          await contract.withdraw(tokenAddress)
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please Connect Metamask")
    }
  }




  return (
    <div className="my-10 flex flex-col gap-5">
      <h1 className=" text-2xl font-bold ">Flash Loan</h1>
      {/* <div className="text-base font-normal break-all">
        <b className="text-base font-bold">Contract Address: </b>
        0x61A1599217350A3aFb9572246245f3016C7cD131
      </div> */}
      <div className="flex flex-col gap-5 bg-white items-center justify-center mx-auto px-10 py-8 rounded-lg shadow-lg w-full md:w-1/2">
        <div className="text-base font-normal break-all"><b>Token Balance: </b> {tokenvalue}</div>
        <div className="text-base font-bold">Please select token you want to flash loan</div>
        <div className="w-40">
          <Select defaultValue="Weth" value={selectedValue} onChange={handleSelectChange}>
            <option value="Weth">
              Weth
            </option>
            <option value="Link">
              Link
            </option>
            <option value="DAI">
              DAI
            </option>
            <option value="USDC">
              USDC
            </option>
            <option value="WBTC">
              WBTC
            </option>
            <option value="USDT">
              USDT
            </option>
            <option value="ERUS">
              ERUS
            </option>
          </Select>
        </div>
        <div className="text-base font-bold">Please input the number of token you want to deposit or flash loan</div>
        <TextInput type="text" sizing="md" className="w-40" value={value} onChange={handleInputChange} />
        
        <Button className='w-32' gradientMonochrome="info" onClick={() => deposit()}>Deposit</Button>
        <Button className='w-32' gradientMonochrome="info" onClick={() => flashLoan()}>Flash Loan</Button>
        <Button className='w-32' gradientMonochrome="info" onClick={() => withdraw()}> Withdraw </Button>
  
      </div>







    </div>
  );

}

export default FlashLoan;
