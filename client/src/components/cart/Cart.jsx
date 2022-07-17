import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
//Components
import CartItem from "../cartItem/CartItem";

//styles
import { Wrapper, ButtonWrapper } from "./cart.styles";
//types

const Cart = ({
  carItems,
  addToCart,
  removeFromCart,
  setCartItems,
  setIsCartOpen,
}) => {
  const { user } = useContext(AuthContext);

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (carItems.length > 0) {
        const newPurchase = {
          userId: user._id,
          carItems: carItems,
          total: calculateTotal(carItems).toFixed(2),
        };
        const res = await axios.post("/purchase", newPurchase, {
          withCredentials: true,
        });
        setCartItems([]);
        setIsCartOpen(false);
        console.log(res);
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {carItems.length === 0 ? <p>No items in the cart.</p> : null}
      {carItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(carItems).toFixed(2)}</h2>
      <ButtonWrapper>
        <button onClick={handleClick}>Buy Now!</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Cart;
