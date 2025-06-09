import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import Products from "../components/Products";
import axios from "axios";
import { ClotheStyles, logos } from "../utlis/constants";
import Testimonials from "../components/home/Testimonials";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { motion } from "motion/react";
import { textAnimation } from "../utlis/animations";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/mens-shirts"
        );
        const product1 = res.data.products.filter(
          (_: any, index: number) => index < 4
        );
        setProducts(product1);
      } catch (err) {
        console.log("Error fetching Products :", err);
      }
    }
    getProducts();
  }, []);
  return (
    <Layout>
    <div className="flex w-full flex-col items-center justify-center">
      <HeroSection />
      <div className="bg-black w-full">
      <motion.div className="flex max-w-[1400px] mx-auto items-center gap-4 justify-around  sm:p-10 p-6 w-full overflow-hidden flex-wrap"
        initial={{ x: "-100%"}}
        whileInView={{x: 0}}
        transition={{ duration: 0.5}}
        viewport={{ once: true}}
      >
        {logos.map( logoUrl =>(
          <img src={logoUrl} alt="logo"
            key={logoUrl}
            className="h-[2vw] max-h-[40px] min-h-[20px] object-contain"
          />
        ))}
      </motion.div>
      </div>
      {/* New Arrival  */}
      <motion.h2 className="uppercase text-center sm:text-5xl text-3xl font-integral-bold mt-14 sm:mb-10 "
        {...textAnimation}
      >
        New Arrivals
      </motion.h2>
      <Products products={products} />
      <motion.div className="flex sm:w-fit w-full px-4 mx-auto" 
        initial={{ y: 90 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true}}
      > 
      <Link to="/category/mens-shirts" className="border-black text-center border rounded-full sm:py-4 sm:px-16 py-2  sm:w-fit w-full hover:bg-black active:bg-black active:text-white hover:text-white">
        View All
      </Link>
      </motion.div>

      <hr className="border-b border-b-black" />

      {/* Top Selling  */}
      <motion.h2 className="uppercase text-center sm:text-5xl text-3xl font-integral-bold mt-14 sm:mb-10"
        {...textAnimation}
      >
        Top Selling
      </motion.h2>
      <Products products={products} />
      <motion.div className="flex sm:w-fit w-full px-4 mx-auto" 
        initial={{ y: 90 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true}}
      > 
      <Link to="/category/mens-shirts" className="border-black text-center border rounded-full sm:py-4 sm:px-16 py-2  sm:w-fit w-full hover:bg-black active:bg-black active:text-white hover:text-white">
        View All
      </Link>
      </motion.div>

      {/* Browse By Dress Style */}
      <div className="bg-[#F0EEED] w-full max-w-[1240px] rounded-3xl mt-20 sm:mb-10 sm:p-8 p-4">
        <motion.h2 className="uppercase text-center sm:text-5xl text-3xl font-integral-bold p-4"
          initial={{ y: 100, opacity: 0.5}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 0.3}}
          viewport={{ once: true}}
        >
          Browse By Dress Style
        </motion.h2>
        <div className="w-full grid min-[500px]:grid-cols-3 gap-cols-1 gap-4 mt-10">
          {ClotheStyles.map((style, index) => (
            <motion.div 
              initial={{ x: (index==1||index==3)?100:-100, opacity: 0.5}}
              whileInView={{ x: 0, opacity: 1}}
              transition={{ duration: 0.8}}
              viewport={{ once: true}}
              className={`${
                index % 3 == 1 || index % 3 == 2 ? "min-[500px]:col-span-2" : ""
              } bg-white min-h-[200px] relative overflow-hidden rounded-lg`}
              key={style.style}
            >
            <Link to="category/mens-shirts" 
            >
              <p className="z-10 font-extrabold bg-transparent p-4 sm:text-3xl text-xl font-roboto">{style.style}</p>
              <img src={style.image} alt="style image" 
              className="absolute w-[80%] h-full top-0 right-0 object-cover"/>
            </Link>
            </motion.div>
          ))}
        </div>
        </div>
      {/* Our Happy Customers  */}
      <div className="w-full mb-10">
        <div className="w-full max-w-[1240px] mx-auto">
          <motion.h2 className="uppercase sm:text-5xl sm:px-0 px-2 text-3xl font-integral-bold mt-10"
            {...textAnimation}
          >
            Our Happy Customers
          </motion.h2>
        </div>
        <div className="max-w-screen overflow-x-hidden flex no-scrollbar">
          <div className="shrink-0 relative  mx-auto group mt-10 mb-10 cursor-pointer">
            <div className="flex justify-start gap-4 w-full animate-carousel group-hover:[animation-play-state:paused]">
              <Testimonials />
            </div>
            <div className="flex absolute translate-x-full left-4 top-0 justify-start gap-4  w-full animate-carousel group-hover:[animation-play-state:paused]">
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
