import { socialMedia } from "../pages/main";
import styles from "@/styles/style";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Flash-Group6. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 mr-5">
        {socialMedia.map((social, index) => (
            <div
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
            >
            {social.icon}
            </div>
        ))}
        </div>
        </div>
    </section>
);

export default Footer;
