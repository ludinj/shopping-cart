import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
//components
import Item from "../../components/item/Item";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Cart from "../../components/cart/Cart";
//styles
import { WrapperHome, StyledButton, Content } from "./Home.styles";
import NavBar from "../../components/navBar/NavBar";

//types

const getProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products/");
  return res.data;
};

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { data, isLoading, error } = useQuery("products", getProducts);

  const getTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.amount, 0);
  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      //1. is the item already added in the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // first time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, []);
    });
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <WrapperHome>
      <NavBar />
      <Content>
        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        >
          <Cart
            carItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            setCartItems={setCartItems}
            setIsCartOpen={setIsCartOpen}
          />
        </Drawer>
        <StyledButton onClick={() => setIsCartOpen(true)}>
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color="error"
            overlap="rectangular"
          >
            <AddShoppingCart />
          </Badge>
        </StyledButton>

        <Grid container spacing={3} style={{ width: "90%" }}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Content>
    </WrapperHome>
  );
};

export default Home;
