import { Link } from "react-router-dom";
import { Statics } from "../../utlis/constants";
import SvgStar from "../ui/customSvgs/SvgStar";
import { motion } from "motion/react";
import { textAnimation } from "../../utlis/animations";

const HeroSection = () => {
  return (
    <div className="bg-[#F3F0F1]  w-full font-roboto">
      <div className="flex justify-between max-w-[1400px] mx-auto items-center flex-col sm:flex-row">
        <motion.div className="max-w-[550px] sm:ml-10 px-4 flex flex-col mt-8 gap-y-6 py-10">
          <motion.h2 className="lg:text-6xl sm:text-4l text-3xl font-integral-bold uppercase "
            {...textAnimation}
          >
            Find Clothes That Matches Your Style
          </motion.h2>
          <motion.p className="text-gray-600"
            {...textAnimation}
            transition={{delay: 0.3, duration: 0.8}}
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </motion.p>
          <motion.div {...textAnimation} transition={{delay: 0.6, duration: 0.8}}>
          <Link to="/category/smartphones" className="hover:bg-black/90 cursor-pointer active:shadow-lg bg-black text-[#F3F0F1] rounded-full py-4 px-16 w-fit">
            Shop Now
          </Link>
          </motion.div >
          <motion.div className="w-full flex gap-4 items-center sm:justify-start justify-center sm:text-start text-center flex-wrap"
          {...textAnimation} transition={{delay: 0.9, duration: 0.8, staggerChildren: 0.2}}>
            {Statics.map((Static, index) => (
              <motion.div key={Static.title}
                className="flex flex-col sm:items-start items-center text-nowrap"
                {...textAnimation} transition={{delay: 0.9+(index*0.3), duration: 0.4}}
              >
                <p className="font-semibold text-4xl">{Static.value}+</p>
                <p className="text-[15px]">{Static.title}</p>                
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="relative self-end"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true}}
        >
          <SvgStar classname="absolute w-8 h-8 aspect-square rotate-45 left-3/4 top-1/5 scale-155" />
          <SvgStar classname="absolute w-8 h-8 rotate-45 left-1/11 top-2/5" />
          <img src="images/heroImage.webp" alt="heroimage" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
