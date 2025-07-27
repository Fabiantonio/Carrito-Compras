import { Header } from "./Components/Header.jsx";
import { Cloth } from "./Components/Cloth.jsx";
import "./App.css";
import { useCart } from "./hooks/useCart.js";

function App() {
 
 const {
  data,
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
 } = useCart();

  return (
    <div className="app">
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="app-main">
        <div className="main-content">
          <div className="container">
            <h2 className="section-title">Nuestra Colección</h2>
            <div className="grid grid-products product-grid">
              {data.map((product) => (
                <Cloth
                  key={product.id}
                  cloth={product}
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
