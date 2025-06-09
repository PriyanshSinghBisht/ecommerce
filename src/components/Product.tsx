import { Link } from "react-router-dom";
import type { ProductType } from "../utlis/types";
import StarRating from './ui/StarRating';

const Product = ({ product } : { product: ProductType }) => {
  return (
    <div className="mt-8 snap-center sm:mb-16 mb-8  min-w-[300px] sm:p-4 p-2">
      <Link to={`/products/${product.id}`} className="bg-[#F0EEED] block rounded-xl">
        <img src={product.images[0]} alt={product.category} className="mix-blend-multiply" />
      </Link>
       <h5 className="font-bold mt-4">{product.title}</h5>
       <div className="flex gap-2 items-center mt-2">
    <StarRating rating={product.rating} /><span className="text-sm">{product.rating}/5</span>
    </div>   
       <p className="text-xl font-semibold">
         ${product.price} 
        <span className="text-xs text-red-500 bg-red-100 rounded-full px-2 py-1 ml-2 ">-{product.discountPercentage}%</span>
       </p>
    </div>
  )
}

export default Product