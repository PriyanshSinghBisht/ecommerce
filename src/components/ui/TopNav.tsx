import { links } from "../../utlis/constants";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { cn } from "../../utlis/cn";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { IoMdClose } from "react-icons/io";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartContext = useCart();
  const itemsInCart: number = cartContext?.carts?.length || 0;
  const [hideTop, setHideTop] = useState(false);

  return (
    <nav className="shadow-sm bg-white sticky top-0 z-20">
      {!hideTop && (
        <section className="w-full  bg-black text-white flex items-center justify-between p-2 text-sm">
          <div className="flex  max-w-[1240px] mx-auto justify-between w-full sm:flex-row flex-col gap-y-2 gap-x-8 ">
            <p className="flex gap-x-2">
              Developed by{" "}
              <Link
                to="https://pr1yansh.vercel.app"
                target="blank"
                className="text-blue-400 hover:text-blue-500 cursor-pointer"
              >
                Priyansh Singh Bisht
              </Link>
            </p>
            <p className="flex gap-x-2">
              Designed by{" "}
              <Link
                to="https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie"
                target="blank"
                className="text-blue-400 hover:text-blue-500 cursor-pointer"
              >
                Hamza Naeem
              </Link>{" "}
            </p>
          </div>
          <button onClick={() => setHideTop(true)}>
            <IoMdClose className="w-6 h-6 cursor-pointer fill-slate-300 hover:fill-white" />
          </button>
        </section>
      )}
      <ul className="flex items-center max-w-[1400px] lg:mx-auto mx-4 justify-between py-4 gap-x-4">
        <ul className="flex gap-x-8 items-center">
          <li>
            <button onClick={() => setIsOpen(!isOpen)}>
              <CiMenuBurger className="text-xl sm:hidden flex" />
            </button>
          </li>
          <li className="sm:text-3xl text-xl font-black font-integral-bold cursor-pointer">
            <Link to="/">SHOP.CO</Link>{" "}
          </li>
        </ul>
        <ul className="sm:flex hidden gap-x-4 ">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                key={link.name}
                className="hover:text-gray-500 text-nowrap"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <li className="rounded-full max-w-[500px] w-full bg-gray-100 focus-within:bg-gray-200 p-2 min-[800px]:flex hidden items-center gap-x-3">
          <CiSearch className="text-2xl" />
          <input
            type="text"
            className="outline-none"
            placeholder="Search for products"
          />
        </li>

        <ul className="flex gap-x-4">
          <li>
            {" "}
            <CiSearch className="text-2xl min-[800px]:hidden flex hover:text-gray-500" />
          </li>
          <li className="relative">
            <Link to="/cart">
              <MdOutlineShoppingCart className="text-2xl hover:text-gray-500" />
              {itemsInCart > 0 && (
                <span className="absolute right-1 -top-2 bg-red-500 -z-1 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center">
                  {itemsInCart}
                </span>
              )}
            </Link>
          </li>
          <li>
            <FaRegUserCircle className="text-2xl hover:text-gray-500" />
          </li>
        </ul>
      </ul>

      <ul
        className={cn(
          "sm:hidden flex flex-col items-center justify-center pb-8 overflow-hidden w-full",
          {
            "h-0 hidden": !isOpen,
            "h-auto": isOpen,
          }
        )}
      >
        {links.map((link, index) => (
          <li key={link.name} className="w-full  px-8">
            <a
              href={link.href}
              className="hover:text-gray-500 text-nowrap text-center w-full flex items-center "
            >
              <span>{link.name}</span>
              <FaAngleRight className="ml-2" />
            </a>
            {index < links.length - 1 && (
              <hr className="border-b border-gray-300 mb-2 mt-2" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
