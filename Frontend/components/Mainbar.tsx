import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import styles from "../styles/style";
import Acc from "@/components/Icon";
import { useState, useEffect } from "react";


const Mainbar: React.FC = () => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({ connector: new InjectedConnector(), })
    const [ ethValue, setEthValue] = useState('')
  
    return (
      <div>
        {/* Account Profile */}
        {/* <div className={`flex justify-start bg-black ${styles.flexStart}`}>
        <img 
            src= {power.src}
            className="mr-50 h-30 sm:h-30"
            alt="connection"
            style={{ width: "70px", height: "70px", justifySelf: "start" }}
          />
      </div> */}
      
        <div className={`flex justify-end ${styles.flexCenter}`}>
          <section className="mt-10 flex flex-col gap-5 justify-end">
            <span className='ss:text-[17px] text-[17px] text-red-400'> <b> Account Profile </b></span>
            <div className="text-[12px] font-normal break-all text-white -mt-4" id="MetamaskAddress">
              <b>MetaMask Address:</b> {isConnected ? address : "0x"}
            </div>
            {/* <div className="text-[15px] font-normal break-al text-white" id="MetamaskAddress">
              <b>Eth Balance:</b> {isConnected ? ethValue : 0}
            </div> */}
          </section>
        {/* Image */}
        </div>
       
      </div>
    );
  };
  
  export default Mainbar;