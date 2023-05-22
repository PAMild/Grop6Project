import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { ethers } from "ethers";

import FlashLoan from '../components/FlashLoan';
import Deposit from '../components/Deposit';
import styles from "../styles/style";
import Mainbar from "@/components/Mainbar";
import Hero from "@/components/Hero";
import Arbitrage from "@/components/Arbitrage";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import GetStarted from "@/components/ConnectMeta";

import { useState, useEffect } from "react";
import Flash from"../public/Flash.png"
import connections from '../public/connections.png'
import Trade from '../public/Trade.jpg'




export default function Home() {
  // address-账户地址 isConnected-是否连接
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: new InjectedConnector(), })
  const { disconnect } = useDisconnect()
  const [ ethValue, setEthValue] = useState('')

  return (
      <div className="bg-black-gradient w-full overflow-hidden">
        
          <Nav/> 
       
          {/* {`${styles.paddingX} ${styles.flexStart}` */}
        {/* <div className=''> */}
        {/* <div> */}
          
          {/* <div className={`relative`}> */}
              {/* AAve */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={`relative mt-2 ml-10`} style={{ justifySelf: "end", display: "flex", justifyContent: "space-between" }}>
              <div>
                <img 
                  src={Flash.src}
                  className="mr-0 h-20 sm:h-30"
                  alt="LG"
                  style={{ width: "200px", height: "100px", opacity: 0.9 }} 
                />
              </div>
            
            </div>
              <div style={{ justifySelf: "start" }}>
                <div className="-mt-4 mr-10">
                  <Mainbar />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
          
        {/* </div> */}

      <div className="bg-black-gradient overflow-hidden">
        <main className='w-full rounded-lg  bg-black h-auto overflow-auto'>
          {/* AAve */}
          <div className={`bg-primary ${styles.flexStart}`}>
            {/* <div className={`${styles.boxWidth}`}> */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={`relative mt-7`} style={{ justifySelf: "end" }}>
                  <img  
                    src={Trade.src}
                    className="mr-0 h-20 sm:h-30 -ml-10"
                    alt="BG"
                    style={{ width: "1100px", height: "500px", opacity: 0.5 }} 
                  />
                </div>
                <div style={{ justifySelf: "start" }}>
                  <div className='mt-22'>
                    <Hero />
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img 
              src = {connections.src}
              className="mr-0 h-20 sm:h-30"
              alt="connection"
              style={{width: "60px", height: "60px" ,justifySelf: "end" }}
            />
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} relative`}>
            <GetStarted/>
          </div>
          {/* <div className='border-t border-accents-2 mt-6'> </div> */}
          
          {/* Depositor */}
          <section id="Deposit">
          <div className={`bg-primary ${styles.flexStart}`} >
            <div className={`${styles.boxWidth} mt-64 ml-16 mr-16 sm:flex-auto bg-black-gradient-2 rounded-[15px] box-shadow`}>
            <span className="text-white ss:text-[62px] text-[72px] ml-5"> <b> Deposit Asset to 
              <span className="text2-gradient ss:text-[62px] text-[102px]"> <i>  Flash </i>  </span>
              </b>
            </span>
              <div className="font-normal text-white className= ss: text-[20px] ml-5">
                <b className=" ss: text-[20px]">Apporve:</b> approve the amount of token 
              </div>
              <div className="font-normal text-white className= ss: text-[20px] mt-2 ml-5">
                <b className=" ss: text-[20px]">Supply:</b>  supply the token to aave, then aave will give us the atoken back
              </div>
              <div className="font-normal text-white className= ss: text-[20px] mt-2 ml-5 mb-10">
                <b className=" ss: text-[20px]">Withdraw:</b> withdraw the token to our metamask
              </div>
            </div>
            <div className="bg-white mx-auto rounded-lg shadow-lg mr-32 mt-64">
                <Deposit/>
          </div>
          </div>
          </section>
          {/* Depositor */}
          {/* Contract 2-Flash Loan*/}
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} mt-52 ml-24 mb-20`}>
            <section id="flashLoan">
              <FlashLoan />
            </section>
          {/* Contract 2 */}
            </div>
            <div className={`${styles.boxWidth} mt-60 mr-10`}>
                <Arbitrage />
            </div>

            {/* gradient start */}
            <div className='mt-56'>
              <div className="absolute z-[0] -left-1/3 w-[40%] h-[35%] pink__gradient " />
              <div className="absolute z-[1] w-[20%] h-[50%] -left-1 rounded-full white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 blue__gradient" />
            </div>
            {/* gradient end */}
          </div>  
        </main>

      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}
