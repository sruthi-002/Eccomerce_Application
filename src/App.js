import React, { useEffect, useState } from "react";
import Products from "./component/Productlist/Products";
import Navbar from "./component/Navbar/Navbar";
import Cart from "./component/Cart/Cart";
import { commerce } from "./commerce/commerce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOutForm/Chekout/CheckOut";
import CartItem from "./component/Cart/CartItem/CartItem";
import Login from "./Login/Login";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const [cart, setCart] = useState([]);
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    carditems();
    fetchCart();
  };
  const [item, setItem] = useState();
  const carditems = async () => {
    const cartItems = await commerce.cart.retrieve();
    setItem(cartItems.total_items);
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    carditems();
    fetchCart();
    setCart(cart);
    fetchCart();
  };

  const handleRemoveCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
    fetchCart();
  };

  const handleEmptyCartItem = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
    fetchCart();
  };

  const refreshCart = async () =>
  {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const [order,setOrder] = useState({});
  const [error,setError]=useState('')
  const handleCheckout = async(checkoutToken, newOrder) =>
  {
    try {

      const incomingOrder= await commerce.checkout.capture(checkoutToken,newOrder);
      setOrder(incomingOrder);
      refreshCart();
      
    } catch (error) {

      setError(error.data.error.message);
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
    carditems();
    fetchCart();
  }, []);

  console.log(products);

  return (
    <Router>
      <div>
        <Navbar totalItems={item} onItems={carditems} />
      </div>
      <Routes >
        <Route
          exact
          path="/"
          element={
            <Products products={products} onAddtoCart={handleAddToCart} />
          }
        ></Route>
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCartItem={handleEmptyCartItem}
            />
          }
        ></Route>
        <Route exact path="/Checkout" 
        element={<CheckOut 
          cart={cart}
          order={order}
          checkout={handleCheckout}
          error={error}
        />}
        >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
