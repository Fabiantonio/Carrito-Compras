import { useState, useEffect } from "react";
import { Header } from "./Components/Header.jsx";
import { Guitar } from "./Components/Guitar.jsx";
import { db } from "./utils/db.js";
import "./App.css";

function App() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MAX_ITEMS = 10;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const itemExists = cart.findIndex((product) => product.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const updateCart = [...cart];
      updateCart[itemExists].quantity += 1;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  }

  function increaseQuantity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function decreaseQuantity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="app">
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="app-main">
        <div className="main-content">
          <div className="container">
            <h2 className="section-title">Nuestra Colección</h2>
            <div className="grid grid-products product-grid">
              {data.map((product) => (
                <Guitar
                  key={product.id}
                  guitar={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            STORE - Todos los derechos reservados © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
