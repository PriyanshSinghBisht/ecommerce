import { LiaCartPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const EmptyCartState = () => {
  return (
    <div className="flex jsutify-center items-center flex-col  mx-auto">
        <Link to="/category/mobile-accessories" className="flex text-gray-400 hover:text-gray-300 transition-all duration-300 cursor-pointer flex-col items-center justify-center gap-y-4 my-40">
        <LiaCartPlusSolid  className="w-16 h-16" />
        <p className="text-center">Your cart is empty. Add items to get started.</p>
        </Link>
    </div>
  )
}

export default EmptyCartState