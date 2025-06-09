import { useEffect, useState } from "react";
import { cn } from "../../utlis/cn";
import type { CartItemType, ProductType } from "../../utlis/types";
import StarRating from "../ui/StarRating";
import { MdCheck } from "react-icons/md";
import type { ClothSizeType } from "../../utlis/types";
import { clothSizeArray } from "../../utlis/constants";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { motion } from "motion/react";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { AnimatePresence } from "motion/react"

type productColorType = "bg-green-700" | "bg-purple-700" | "bg-yellow-700";
const productColos: productColorType[] = [ "bg-green-700", "bg-purple-700", "bg-yellow-700"];
const DetailSectionOne = ({
  product,
}: {
  product: ProductType | undefined;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSlectedSize] = useState<ClothSizeType>("Small");
  const [ selectedColor, setSelectedColor ] = useState<productColorType>("bg-green-700");
  const cartContext = useCart();

  const findInCart = cartContext?.carts?.find((item)=>{
    return item.id === product?.id
  })

  useEffect(()=>{
    findInCart && setQuantity(findInCart.quantity);
  },[]);

  console.log({findInCart});

  const  onAddToCart = ()=>{
    const cartItem : CartItemType = { 
      id: product?.id || 0,
      title: product?.title || "",
      url : product?.images[0] || "",
      size: selectedSize, 
      color: selectedColor, 
      quantity, 
      price: product?.price || 100
    };

    if(quantity > 0){
      cartContext?.addToCart(cartItem);
    }
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col px-4 sm:gap-8 gap-4">
      <div className="flex  min-[450px]:flex-row items-strech flex-col-reverse max-w-[500px] gap-2">
        <div className="flex min-[450px]:flex-col flex-row flex-1 items-stretch justify-start gap-2">
          {product?.images.map((url: string, index: number) => (
            <div
              key={url}
              onClick={() => setCurrentImageIndex(index)}
              className={cn("flex  min-[450px]:max-w-full max-w-1/4 rounded-xl cursor-pointer overflow-hidden", {
                ring: index == currentImageIndex,
                "hover:ring hover:ring-gray-400": index != currentImageIndex,
              })}
            >
              <img
                src={url}
                alt="product image"
                className="w-auto h-auto object-cover bg-[#F0EEED] rounded-xl hover:scale-105 transition-scale duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex-4 relative bg-[#F0EEED] rounded-xl">
          <div className="overflow-hidden flex justify-center items-center w-full h-full">
        
          <motion.img src={product?.images[currentImageIndex]} alt="product image" 
                key={product?.images[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{  opacity : 1}}
                exit={{ opacity : 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true}}
          />
        
          </div>
          {findInCart!==undefined && <Link to="/cart" className="absolute bottom-0 left-0 text-blue-500 hover:text-blue-600 bg-blue-500/30 font-semibold p-1 rounded-sm text-xs cursor-pointer"> Added To Cart</Link>}
        </div>
      </div>

      <div>
        <h3 className="font-integral-bold font-bold sm:text-4xl text-2xl">
          {product?.title}
        </h3>
        <p className="flex items-center gap-1 sm:my-2">
          <StarRating rating={product?.rating || 0} />
          <span className="text-sm">{product?.rating}/5</span>
        </p>
        <p className="text-xl font-semibold">
          ${product?.price}
          <span className="text-xs text-red-500 bg-red-100 rounded-full px-2 py-1 ml-2 ">
            {product?.discountPercentage}%
          </span>
        </p>
        <p className="text-sm text-gray-700 sm:my-4 my-2">
          {product?.description}
        </p>
        <hr className="my-4 border border-slate-100" />
        <h6 className="text-sm text-gray-600 font-semibold">Select Colors</h6>
        <div className="flex gap-x-2 mt-2">
          {productColos.map(color =>(
            <div key={color} className={cn("flex group items-center justify-center w-fit p-2 rounded-full cursor-pointer",
                color
            )}
            onClick={()=> setSelectedColor(color)}
            >
            <MdCheck className={cn("text-white",
              { "invisible group-hover:visible group-hover:text-slate-300" : selectedColor!= color}
            )} />
          </div>
          ))}
        </div>

        <hr className="my-4 border border-slate-100" />
        <h6 className="text-sm text-gray-600 font-semibold">Choose Size</h6>

        <div className="overflow-x-auto no-scrollbar text-nowrap mt-2">
          <div className="flex gap-x-2">
            {clothSizeArray.map((size) => (
              <div
                key={size}
                onClick={() => setSlectedSize(size)}
                className={cn(
                  "py-2 px-3 rounded-full text-gray-600 bg-[#F0EEED] cursor-pointer",
                  {
                    "bg-black text-white": selectedSize == size,
                    "hover:bg-slate-300": selectedSize != size,
                  }
                )}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-x-2">
          <div className="flex gap-x-2 sm:p-2 w-fit items-center rounded-full bg-[#F0EEED] select-none">
            <FiMinus
              className="w-8 h-8 p-1 hover:bg-white rounded-full cursor-pointer"
              onClick={decreaseQuantity}
            />
            <span className="sm:px-4 font-roboto">{quantity}</span>
            <FiPlus
              className="w-8 h-8 p-1 hover:bg-white rounded-full  cursor-pointer"
              onClick={increaseQuantity}
            />
          </div>
          <button 
          onClick={onAddToCart}
          className="py-2 px-3 w-full rounded-full cursor-pointer text-white bg-black active:bg-slate-800 text-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSectionOne;
