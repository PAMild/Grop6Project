import styles from "../styles/style"; 


const Hero: React.FC = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[70px] text-[70px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[92px] text-[102px]">Trading Edge</span>{" "}
          </h1>
        </div>
        <span className="text-white ss:text-[20px] text-[20px] max-w-[800px] mt-20 mr-52" >
          Hey there! We wanted to share an exciting opportunity with you. 
          We&apos;ve created a DApp aggregating the best pricing for exchanges like Uniswap.
          It could be a great way to capitalize on profitable arbitrage opportunities.</span>
        <div className="absolute z-[0] w-[30%] h-[35%] pink__gradient" />
        <div className="absolute z-[1] w-[30%] h-[30%] white__gradient bottom-20" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
