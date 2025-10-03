import { useCart } from "../hooks/useCart";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link} from "react-router-dom";
import Layout from "../Layout";
import EmptyCartState from "../components/state/EmptyCartState";
// import { useEffect } from "react";

const Cart = () => {
  const cartContext = useCart();
  const carts = cartContext?.carts || [];
  const decreaseQuantity = (cartId : number): void => {
        cartContext?.decreaseQuantity(cartId);
  }

  const increaseQuantity = (cartId : number): void => {
    cartContext?.increaseQuantity(cartId);
  }
  
  const removeFromCart = (cartId : number): void => {
    cartContext?.removeFromCart(cartId);
  }
  

  const totalPrice : number =  parseFloat(carts.reduce((acc, curr) => acc + curr.price*curr.quantity, 0).toFixed(2));

  if (!carts.length) {
    return <Layout><EmptyCartState /> </Layout>;
  }

  // useEffect(()=>{
  //   console.log("cart", carts);
  // },[carts]);

  return (
    <Layout>
    <div className="w-full sm:px-8 px-4 max-w-[1240px] mx-auto my-8">
      <h2 className="uppercase sm:text-4xl text-2xl font-integral-bold mb-6">
        Your Cart
      </h2>
      <div className="flex lg:flex-row items-start flex-col gap-4 ">
        <div className="border-gray-200 rounded-2xl w-full border-2">
          {carts.map((cart) => (
            <div key={cart.id} className="flex w-full sm:flex-row gap-4  flex-col p-4 rounded-lg">
              <Link to={`/products/${cart.id}`} className="flex flex-row items-center">
              <img
                src={cart.url}
                alt="product image"
                className="h-30 block bg-gray-200 rounded-lg"
              />
              <div className="flex flex-col justify-center ml-4">
                <h4 className="text-lg font-roboto font-bold">{cart.title}</h4>
                <p className="text-gray-500 text-sm">Size : {cart.size}</p>
                <p className="text-gray-500 text-sm">Color : {cart.color}</p>
                <p className="text-xl mt-auto font-roboto font-bold">
                  ${cart.price}
                </p>
              </div>
              </Link>
              <div className="flex sm:ml-auto sm:flex-col flex-row-reverse items-end justify-between">
                <MdDelete
                onClick={() => removeFromCart(cart.id)}
                className="fill-red-500 w-8 h-8 cursor-pointer hover:fill-red-600" />
                <div className="flex gap-x-2 sm:p-2 w-fit items-center rounded-full bg-[#F0EEED] select-none">
                  <FiMinus
                    className="w-8 h-8 p-1 hover:bg-white rounded-full cursor-pointer"
                    onClick={()=> decreaseQuantity(cart.id)}
                  />
                  <span className="sm:px-4 font-roboto">{cart.quantity}</span>
                  <FiPlus
                    className="w-8 h-8 p-1 hover:bg-white rounded-full  cursor-pointer"
                    onClick={() => increaseQuantity(cart.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-gray-200 lg:ml-auto self-start rounded-2xl border-2 sm:p-4 p-4 max-w-[500px] w-full">
          <h3 className="text-2xl font-bold font-roboto">Order Summary</h3>
          <div className="flex flex-col gap-y-1 mt-2">
            <p className="text-gray-500 flex text w-full">
              {" "}
              Subtotal
              <span className="text-md font-roboto font-semibold text-black ml-auto">
                ${totalPrice}
              </span>
            </p>
            <p className="text-gray-500 flex text w-full">
              {" "}
              Discount(-20%)
              <span className="text-md font-roboto font-semibold text-red-500 ml-auto">
                -${(totalPrice * 0.2).toFixed(2)}
              </span>
            </p>
            <p className="text-gray-500 flex text w-full">
              {" "}
              Delivery Fee
              <span className="text-md font-roboto font-semibold text-black ml-auto">
                15$
              </span>
            </p>
          </div>
          <hr className="my-4 border border-gray-200" />
          <p className="text-gray-800 flex w-full mb-4 text-lg">
            Total{" "}
            <span className="text-xl font-roboto font-semibold text-black ml-auto">
              ${(totalPrice - totalPrice * 0.2 + 15).toFixed(2)}
            </span>
          </p>
          <div className="flex flex-1 gap-x-2">
            <div className="rounded-full max-w-[500px] flex-1 bg-gray-100 focus-within:bg-gray-200 p-2 flex items-center gap-x-3">
              <FaTag className="text-2xl w-5 h-5 fill-gray-400" />
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Add promo code"
              />
            </div>
            <button className="bg-black text-white rounded-full py-2 px-6 active:bg-slate-800">
              Apply
            </button>
          </div>
          <button className="bg-black w-full mt-4 flex items-center justify-center gap-x-2 hover:gap-x-3 transitioon-gap duration-300 text-white rounded-full py-4  active:bg-slate-900">
            Go to Checkout
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Cart;
