import { Button, Tabs, TextInput } from "flowbite-react";
import ApproveButton from '../components/ApproveButton';
import SupplyButton from '../components/SupplyButton';
import WithdrawButton from '../components/WithdrawButton';
import React, { useState } from "react";
import Balance from '../components/Balance';
interface Props {
    // props type definitions here
}

const Deposit: React.FC<Props> = () => {
    const [value, setValue] = useState('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    return (
    
        <Tabs.Group className="item-center justify-center" aria-label="Tabs with underline" style="underline">
            {/* Link */}
            <Tabs.Item title="Link">
                <div className="flex flex-col gap-5 mx-auto px-6 py-5">
                    <b className="text-base font-bold">Link Balance:</b>
                    <Balance tokenAddress="0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29" decimals={18} />
                    <b className="text-base font-bold">aLink Balance:</b>
                    <Balance tokenAddress="0x493DC51c35F7ddD891262b8733C63eABaf14786f" decimals={18} />
                    <div className="text-base font-bold">
                        Please type the number of Link
                    </div>
                    <TextInput
                        type="text"
                        sizing="md"
                        className="w-full"
                        value={value} onChange={handleInputChange} />

                    <div className="flex flex-row gap-5 mx-auto">
                        <ApproveButton tokenAddress="0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29" tokenAmount={value} />
                        <SupplyButton tokenAddress="0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29" tokenAmount={value}
                            decimals={18} />
                        <WithdrawButton tokenAddress="0xe9c4393a23246293a8D31BF7ab68c17d4CF90A29" tokenAmount={value} decimals={18} />
                    </div>
                </div>
            </Tabs.Item>

            {/* DAI */}
            <Tabs.Item title="DAI">
                <div className="flex flex-col gap-5 mx-auto px-6 py-5">
                    <b className="text-base font-bold">DAI Balance:</b>
                    <Balance tokenAddress="0xBa8DCeD3512925e52FE67b1b5329187589072A55" decimals={18} />
                    <b className="text-base font-bold">aDAI Balance:</b>
                    <Balance tokenAddress="0xADD98B0342e4094Ec32f3b67Ccfd3242C876ff7a" decimals={18} />
                    <div className="text-base font-bold">
                        Please type the number of DAI
                    </div>
                    <TextInput
                        type="text"
                        sizing="md"
                        className="w-full"
                        value={value} onChange={handleInputChange} />

                    <div className="flex flex-row gap-5 mx-auto">
                        <ApproveButton tokenAddress="0xBa8DCeD3512925e52FE67b1b5329187589072A55" tokenAmount={value} />
                        <SupplyButton tokenAddress="0xBa8DCeD3512925e52FE67b1b5329187589072A55" tokenAmount={value}
                            decimals={18} />
                        <WithdrawButton tokenAddress="0xBa8DCeD3512925e52FE67b1b5329187589072A55" tokenAmount={value} decimals={18} />
                    </div>
                </div>
            </Tabs.Item>

            {/* USDC */}
            <Tabs.Item title="USDC">
                <div className="flex flex-col gap-5 mx-auto px-6 py-5">
                    <b className="text-base font-bold">USDC Balance:</b>
                    <Balance tokenAddress="0x65aFADD39029741B3b8f0756952C74678c9cEC93" decimals={6} />
                    <b className="text-base font-bold">aUSDC Balance:</b>
                    <Balance tokenAddress="0x8Be59D90A7Dc679C5cE5a7963cD1082dAB499918" decimals={6} />
                    <div className="text-base font-bold">
                        Please type the number of USDC
                    </div>
                    <TextInput
                        type="text"
                        sizing="md"
                        className="w-full"
                        value={value} onChange={handleInputChange} />

                    <div className="flex flex-row gap-5 mx-auto">
                        <ApproveButton tokenAddress="0x65aFADD39029741B3b8f0756952C74678c9cEC93" tokenAmount={value} />
                        <SupplyButton tokenAddress="0x65aFADD39029741B3b8f0756952C74678c9cEC93" tokenAmount={value}
                            decimals={6} />
                        <WithdrawButton tokenAddress="0x65aFADD39029741B3b8f0756952C74678c9cEC93" tokenAmount={value} decimals={6} />
                    </div>
                </div>
            </Tabs.Item>

            {/* WBTC */}
            <Tabs.Item title="WBTC">
                <div className="flex flex-col gap-5 mx-auto px-6 py-5">
                    <b className="text-base font-bold">WBTC Balance:</b>
                    <Balance tokenAddress="0x45AC379F019E48ca5dAC02E54F406F99F5088099" decimals={8} />
                    <b className="text-base font-bold">aWBTC Balance:</b>
                    <Balance tokenAddress="0x005B0d11379c4c04C0B726eE0BE55feb50b59f81" decimals={8} />
                    <div className="text-base font-bold">
                        Please type the number of WBTC
                    </div>
                    <TextInput
                        type="text"
                        sizing="md"
                        className="w-full"
                        value={value} onChange={handleInputChange} />

                    <div className="flex flex-row gap-5 mx-auto">
                        <ApproveButton tokenAddress="0x45AC379F019E48ca5dAC02E54F406F99F5088099" tokenAmount={value} />
                        <SupplyButton tokenAddress="0x45AC379F019E48ca5dAC02E54F406F99F5088099" tokenAmount={value}
                            decimals={8} />
                        <WithdrawButton tokenAddress="0x45AC379F019E48ca5dAC02E54F406F99F5088099" tokenAmount={value} decimals={8} />
                    </div>
                </div>
            </Tabs.Item>

            {/* USDT */}
            <Tabs.Item title="USDT">
                <div className="flex flex-col gap-5 mx-auto px-6 py-5">
                    <b className="text-base font-bold">USDT Balance:</b>
                    <Balance tokenAddress="0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780" decimals={6} />
                    <b className="text-base font-bold">aUSDT Balance:</b>
                    <Balance tokenAddress="0xF2C9Aa2B0Fc747fC0327B335541FD34D180f8A30" decimals={6} />
                    <div className="text-base font-bold">
                        Please type the number of USDT
                    </div>
                    <TextInput
                        type="text"
                        sizing="md"
                        className="w-full"
                        value={value} onChange={handleInputChange} />

                    <div className="flex flex-row gap-5 mx-auto">
                        <ApproveButton tokenAddress="0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780" tokenAmount={value} />
                        <SupplyButton tokenAddress="0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780" tokenAmount={value}
                            decimals={6} />
                        <WithdrawButton tokenAddress="0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780" tokenAmount={value} decimals={6} />
                    </div>
                </div>
            </Tabs.Item>

            {/* ERUS */}
            <Tabs.Item title="ERUS">
                <div className="flex flex-col gap-5 mx-auto px-6 py-5">
                    <b className="text-base font-bold">ERUS Balance:</b>
                    <Balance tokenAddress="0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b" decimals={2} />
                    <b className="text-base font-bold">aERUS Balance:</b>
                    <Balance tokenAddress="0x5a6Ba5e8e7091F64D4bb6729830E5EAf00Bb943d" decimals={2} />
                    <div className="text-base font-bold">
                        Please type the number of ERUS
                    </div>
                    <TextInput
                        type="text"
                        sizing="md"
                        className="w-full"
                        value={value} onChange={handleInputChange} />

                    <div className="flex flex-row gap-5 mx-auto">
                        <ApproveButton tokenAddress="0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b" tokenAmount={value} />
                        <SupplyButton tokenAddress="0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b" tokenAmount={value}
                            decimals={2} />
                        <WithdrawButton tokenAddress="0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b" tokenAmount={value} decimals={2} />
                    </div>
                </div>
            </Tabs.Item>
        </Tabs.Group>


    );

}


export default Deposit;