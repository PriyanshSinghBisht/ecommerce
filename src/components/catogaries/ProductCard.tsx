import { Link } from "react-router-dom";
import type { ProductType } from "../../utlis/types";
import StarRating from '../ui/StarRating';

const ProductCard = ({ product } : { product: ProductType }) => {
  return (
    <div className="mx-auto sm:p-4 w-full p-2">
      <Link to={`/products/${product.id}`} className="bg-[#F0EEED] p-2 hover:bg-gray-200 block rounded-xl w-full aspect-square">
        <img src={product.images[0]} alt={product.category} className="hover:scale-105 trasition-scale duration-300  mix-blend-multiply" />
      </Link>
       <h5 className="font-bold sm:mt-4 mt-2">{product.title}</h5>
       <div className="flex gap-2 items-center mt-2">
    <StarRating rating={product.rating} /><span className="text-sm">{product.rating}/5</span>
    </div>   
       <p className="sm:text-xl font-semibold">
         ${product.price} 
        <span className="sm:text-xs text-[9px] text-red-500 bg-red-100 rounded-full px-2 py-1 ml-2 ">-{product.discountPercentage}%</span>
       </p>
    </div>
  )
}

export default ProductCard