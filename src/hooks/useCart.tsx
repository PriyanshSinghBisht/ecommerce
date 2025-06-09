import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItemType } from "../utlis/types";
import toast from "react-hot-toast";


interface CartContextType {
    carts: CartItemType[];
    addToCart: (item: CartItemType) => void;
    removeFromCart: (cartId: number) => void;
    increaseQuantity: (cartId: number) => void;
    decreaseQuantity: (cartId: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [carts, setCarts] = useState<CartItemType[]>([]);
    const addToCart = (item : CartItemType) => {
        const isPresent = carts.some((cartItem) => cartItem.id === item.id);
        if(item.quantity === 0){
            removeFromCart(item.id);
            return;
        }
            
        if (isPresent) {
            setCarts(carts.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: item.quantity };
                }
                return cartItem;
            }));
        } else setCarts([...carts, item]);

        if(isPresent) toast.success("Item quantity updated in cart");
        else toast.success("Item added to cart")
    };

    const removeFromCart = (cartId : number) => {
        setCarts(carts.filter((cartItem) => cartItem.id !== cartId));
        toast.success("Item removed from cart");
    };

    const increaseQuantity = (cartId: number) => {
            setCarts(carts.map((cartItem) =>
            cartItem.id === cartId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
    };


    const decreaseQuantity = (cartId: number) => {
        setCarts(carts.reduce((acc, cartItem) => {
            if (cartItem.id === cartId) {
                if (cartItem.quantity > 1) {
                    acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
                } // If quantity is 1, it's removed by not pushing
            } else acc.push(cartItem);
            return acc;
        }, [] as CartItemType[]));
    };


    return (
        <CartContext.Provider value={{ carts, addToCart, removeFromCart , increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };