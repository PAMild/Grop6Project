import React from 'react';
import { Button } from "flowbite-react";

import { Table } from 'flowbite-react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';

import Balance from './Balance';


interface Props {
    // props type definitions here
  }


const contractAddress = "0xaeA3A6C8Fac7E59680115504a682b49404c37CbB";
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
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "_interestRateMode",
                "type": "uint8"
            }
        ],
        "name": "borrowFromLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalanceALink",
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
                "name": "_atokenAddress",
                "type": "address"
            }
        ],
        "name": "getBalanceAtoken",
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
        "name": "getBalanceLink",
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
            }
        ],
        "name": "getBalancetoken",
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
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "getUserAccountData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalCollateralBase",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalDebtBase",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "availableBorrowsBase",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentLiquidationThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ltv",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "healthFactor",
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
            },
            {
                "internalType": "uint8",
                "name": "_interestRateMode",
                "type": "uint8"
            }
        ],
        "name": "repaytoLiquidity",
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

const BalanceTable: React.FC<Props> = () => {
    const { isConnected } = useAccount()
    async function getAllBalance() {
        if (isConnected) {
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner(); // 获得签名者
            const accounts = await provider.listAccounts(); // 获取账户列表
            console.log("Accounts:", accounts);
            const contract = new ethers.Contract(contractAddress, abi, signer);
            try {


                // const amountInput = document.getElementById('supplyLinkAmount') as HTMLInputElement;
                // const linknumbersupply = amountInput.value;
                console.log(contract);
                const linkAddress = "0x8a0E31de20651fe58A369fD6f76c21A8FF7f8d42"
                const link = await contract.getBalancetoken(linkAddress);

                const linkNumber = ethers.utils.formatUnits(link, 18);
                const linkBalance = document.getElementById('linkBalance')
                if (linkBalance) {
                    linkBalance.innerHTML = linkNumber
                }

                const daiAddress = "0x68194a729C2450ad26072b3D33ADaCbcef39D574"
                const dai = await contract.getBalancetoken(daiAddress);

                const daiNumber = ethers.utils.formatUnits(dai, 18);
                const daiBalance = document.getElementById('daiBalance')
                if (daiBalance) {
                    daiBalance.innerHTML = daiNumber
                }

            

                const usdcAddress = "0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f"
                const usdc = await contract.getBalancetoken(usdcAddress);

                const usdcNumber = ethers.utils.formatUnits(usdc, 6);
                const usdcBalance = document.getElementById('usdcBalance')
                if (usdcBalance) {
                    usdcBalance.innerHTML = usdcNumber
                }

                const wbtcAddress = "0xf864F011C5A97fD8Da79baEd78ba77b47112935a"
                const wbtc = await contract.getBalancetoken(wbtcAddress);
                const wbtcNumber = ethers.utils.formatUnits(wbtc, 8);
                const wbtcBalance = document.getElementById('wbtcBalance')
                if (wbtcBalance) {
                    wbtcBalance.innerHTML = wbtcNumber
                }

                const wethAddress = "0xD0dF82dE051244f04BfF3A8bB1f62E1cD39eED92"
                const weth = await contract.getBalancetoken(wethAddress);
                const wethNumber = ethers.utils.formatUnits(weth, 18);
                const wethBalance = document.getElementById('wethBalance')
                if (wethBalance) {
                    wethBalance.innerHTML = wethNumber
                }

                const usdtAddress = "0x0Bd5F04B456ab34a2aB3e9d556Fe5b3A41A0BC8D"
                const usdt = await contract.getBalancetoken(usdtAddress);
                const usdtNumber = ethers.utils.formatUnits(usdt, 6);
                const usdtBalance = document.getElementById('usdtBalance')
                if (usdtBalance) {
                    usdtBalance.innerHTML = usdtNumber
                }

                const aaveAddress = "0x5bB220Afc6E2e008CB2302a83536A019ED245AA2"
                const aave = await contract.getBalancetoken(aaveAddress);
                const aaveNumber = ethers.utils.formatUnits(aave, 18);
                const aaveBalance = document.getElementById('aaveBalance')
                if (aaveBalance) {
                    aaveBalance.innerHTML = aaveNumber
                }

                const erusAddress = "0xe20cf465a163c395e7Dde1466Cdd1aBe695B4658"
                const erus = await contract.getBalancetoken(erusAddress);
                const erusNumber = ethers.utils.formatUnits(erus, 2);
                const erusBalance = document.getElementById('erusBalance')
                if (erusBalance) {
                    erusBalance.innerHTML = erusNumber
                }




            } catch (e) {
                console.log(e);
            }
        } else {
            alert("Please Connect Metamask")
        }
    }



    // setInterval(getAllBalance, 5000);
    return (
        <div className='flex flex-col gap-3'>
            <Table >
                <Table.Head>
                    <Table.HeadCell className="text-black"> 
                        Asset Name
                    </Table.HeadCell>

                    <Table.HeadCell className="text-blue-500">
                        Balance
                    </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Link
                        </Table.Cell>
                        <Table.Cell id="linkBalance" className="text-blue-500">
                            0
                        </Table.Cell>
                    </Table.Row>


                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            DAI
                        </Table.Cell>
                        <Table.Cell id="daiBalance" className="text-blue-500">
                            0
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            USDC
                        </Table.Cell>
                        <Table.Cell id="usdcBalance" className="text-blue-500">
                            0
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            WBTC
                        </Table.Cell>
                        <Table.Cell id="wbtcBalance" className="text-blue-500">
                            0
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            USDT
                        </Table.Cell>
                        <Table.Cell id="usdtBalance" className="text-blue-500">
                            0
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            ERUS
                        </Table.Cell>
                        <Table.Cell id="erusBalance" className="text-blue-500">
                            0
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>

            <Button className='mx-auto' gradientMonochrome="info" onClick={() => getAllBalance()}>Refresh Balance</Button>

            
        </div>

    );
}

export default BalanceTable;