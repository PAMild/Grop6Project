import {FaInstagram, FaFacebookSquare, FaTwitterSquare} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "FlashLoan",
    title: "Login",
  },
  {
    id: "Arbitrage",
    title: "Arbitrage",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <FaInstagram style={{ color: "white", fontSize: "24px"}} />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <FaFacebookSquare style={{ color: "white", fontSize: "24px" }}/>,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <FaTwitterSquare style={{ color: "white", fontSize: "24px" }}/>,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <AiFillLinkedin style={{ color: "white", fontSize: "24px" }}/>,
    link: "https://www.linkedin.com/",
  },
];

export default function main(){
  return;
};
