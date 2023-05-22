import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {GiReceiveMoney} from 'react-icons/gi';
import {TbPigMoney} from 'react-icons/tb';
import { useState } from 'react';

const Nav = () =>{
    const [activeNav,setActiveNav] = useState('#')
    return(
        <nav>
            <a href = '#' onClick={() => setActiveNav('#')} className= {activeNav === "#"? 'active':" "} > <AiOutlineHome style={{ fontSize: '20px' }}/> </a>
            <a href = '#Deposit' onClick={()=>setActiveNav ('#Deposit')} className= {activeNav === "#Deposit"? 'active':" "} > <TbPigMoney style={{ fontSize: '20px' }}/> </a>
            <a href= "#flashLoan" onClick={() => setActiveNav('#flashLoan')} className= {activeNav === "#flashLoan"? 'active':" "} > <GiReceiveMoney style={{ fontSize: '20px' }}/> </a>
        </nav>
    )
}

export default Nav

// onClick={ () =>setActiveNav('#')} className= {activeNav==='#' ? 'active': ''}
