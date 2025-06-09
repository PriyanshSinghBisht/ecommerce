import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { footerLinks, paymentMethods } from "../utlis/constants";

const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="bg-black relative w-full rounded-3xl gap-y-4 flex sm:p-10 p-5 items-center justify-around sm:flex-row flex-col">
            {/* Background  */}
            <div className="absolute w-[100vw] h-1/2 bg-[#F0F0F0] bottom-0 -z-10" />
          <div className="flex-1">
            <h4 className="max-w-[500px] sm:text-4xl  text-3xl font-integral-bold text-white">
              Stay Upto Date About Our Latest Offers
            </h4>
          </div>
          <div className="flex flex-col gap-y-4 sm:w-[350px] w-full">
            <div className="flex px-4 bg-white w-full items-center justify-center gap-x-4 rounded-full">
              <TfiEmail className="fill-gray-500" />
              <input
                type="text"
                placeholder="Enter your email address..."
                className="py-2 outline-none w-full"
              />
            </div>
            <button className="rounded-full w-full p-2 active:bg-blue-100 cursor-pointer bg-white">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="bg-[#F0F0F0] w-full py-16">
        <div className="flex flex-wrap gap-x-8 gap-y-4 sm:justify-around justify-start w-full max-w-[1240px] mx-auto  sm:p-0 p-2">
          <div className="flex flex-col gap-y-8">
            <h2 className="sm:text-3xl text-xl font-black font-integral-bold">
              SHOP.CO
            </h2>
            <p className="sm:max-w-[250px] text-sm">
              We have clothes which suits your style. and which you'r Proude to
              wear. From women to men.
            </p>
            <div className="flex gap-x-2 mb-4">
              <div className="p-2 rounded-full bg-white w-fit hover:bg-black hover:text-white transition-all duration-300">
                <FaXTwitter />
              </div>
              <div className="p-2 rounded-full bg-white w-fit hover:bg-black hover:text-white transition-all duration-300">
                <FaFacebookF />
              </div>
              <div className="p-2 rounded-full bg-white w-fit hover:bg-black hover:text-white transition-all duration-300">
                <FaInstagram />
              </div>
              <div className="p-2 rounded-full bg-white w-fit hover:bg-black hover:text-white transition-all duration-300">
                <FaGithub />
              </div>
            </div>
          </div>

          {footerLinks.map((linkGroup) => (  
            <div key={linkGroup.title} className="mb-4">
              <h5 key={linkGroup.title} className="text-sm font-semibold mb-4">
                {linkGroup.title}
              </h5>
              <ul className="flex flex-col gap-y-2">
                {linkGroup.links.map((link) => (
                  <li className="cursor-pointer text-sm hover:text-black text-gray-600 transition-all duration-200" key={link} >{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-[1240px] w-[95%] mx-auto">
          <hr className="border-b border-gray-300 w-full mb-4 mx-auto" />
          <div className="flex sm:flex-row flex-col justify-between items-center gap-y-8">
           <p className="text-sm">@Shop.co | 2025 All rights Reserved</p>
           <div className="flex">
            {paymentMethods.map((method) => (
              <img key={method.url} src={method.url} alt="payment" />
            ))}
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
