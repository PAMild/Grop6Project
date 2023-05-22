import { Navbar } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Button } from "flowbite-react";

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { ethers } from "ethers";

import FixedButton from '../components/FixedButton';
import ApproveButton from '../components/ApproveButton';
import FlashLoan from '../components/FlashLoan';
import BalanceTable from '../components/BalanceTable';
import Deposit from '../components/Deposit';


import Arbitrage from '../components/Arbitrage';
import { useState, useEffect } from "react";




export default function Home() {
  // address-账户地址 isConnected-是否连接
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: new InjectedConnector(), })
  const { disconnect } = useDisconnect()
  const [ ethValue, setEthValue] = useState('')
  
  useEffect(() => {
    // 在组件挂载时调用一次
    getEthBalance();
    const interval = setInterval(getEthBalance, 1000);
    return () => clearInterval(interval);
  }, [setEthValue]);
  
  // 获得以太坊余额
  async function getEthBalance(){
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const accounts = await provider.listAccounts();
    const balanceBN = await provider.getBalance(accounts[0]);
    const balance = ethers.utils.formatEther(balanceBN);
    // console.log(balance);
    setEthValue(balance)
  }

  return (

    <div className='mx-auto h-auto flex flex-col'>
      
      {/* Navbar */}
      <nav className="className='border-b border-gray-200 py-3 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <div className="className='flex items-center lg:px-6 mx-auto max-w-7xl px-14">
          <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Flowbite
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Button className="hidden">
                Get started
              </Button>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="mr-32">
              <Navbar.Link
                href="/navbars"
                active={true}
              >
                Home
              </Navbar.Link>
              <Navbar.Link href="/navbars">
                About
              </Navbar.Link>
              <Navbar.Link href="/navbars">
                Services
              </Navbar.Link>
              <Navbar.Link href="/navbars">
                Pricing
              </Navbar.Link>
              <Navbar.Link href="/navbars">
                Contact
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>

      </nav>
      {/* Narvbar */}
      <div className='bg-accents-0 bg-gray-200 h-auto'>
        <main className='w-full max-w-3xl mx-auto py-16 px-12 rounded-lg shadow-lg bg-gray-100 h-auto overflow-auto'>
          {/* AAve */}
          <section className='flex flex-col gap-6'>
            <h1 className='text-5xl font-bold tracking-tight'>Aave</h1>
            <p className='text-base font-normal'>This example shows how to connect a Metamask wallet with a Next.js app and how to deposit asset to Aave using Aave-V3-core.</p>
          </section>

          <Button onClick={() => connect()} gradientMonochrome="info" className="mt-6">Connect MetaMask</Button>

          {/* AAve */}

          <div className='border-t border-accents-2 mt-6'> </div>

          {/* Account Profile */}
          <section className="mt-6 flex flex-col gap-5">
            <h1 className=" text-2xl font-bold">Account Profile</h1>
            <div className="text-base font-normal break-all" id="MetamaskAddress">
              <b>MetaMask Address:</b>  {isConnected ? address : "0x"}
            </div>
            <div className="text-base font-normal break-all" id="MetamaskAddress">
              <b>Eth Balance:</b>  {isConnected ? ethValue : 0}
            </div>

            {/* <div className="text-xl font-bold mx-auto mt-2">Asset Balance </div>
            <div className="mx-auto">
              <BalanceTable />
            </div> */}
          </section>
          {/* Balance */}

          {/* Depositor */}
          <div className="mt-10 flex flex-col gap-5">
            <h1 className=" text-2xl font-bold ">Deposit Asset to Aave</h1>
            <div className="text-base font-normal">
              <b>Apporve:</b> approve the amount of token
            </div>
            <div className="text-base font-normal">
              <b>Supply:</b>  supply the token to aave, then aave will give us the atoken back
            </div>
            <div className="text-base font-normal">
              <b>Withdraw:</b> withdraw the token to our metamask
            </div>

            <div className="bg-white mx-auto rounded-lg shadow-lg">
              <Deposit />
            </div>

          </div>
          {/* Depositor */}


          {/* Contract 2-Flash Loan*/}
          <FlashLoan />
          {/* Contract 2 */}
          <Arbitrage />
        </main>

      </div>


            
      <div className="w-full mt-auto border-t border-gray-200 shadow-lg">
        <Footer container={true} >
          <Footer.Copyright
            href="#"
            by="Group 6"
            year={2023}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              Github
            </Footer.Link>


          </Footer.LinkGroup>
        </Footer>
      </div>
    </div>
  )
}
