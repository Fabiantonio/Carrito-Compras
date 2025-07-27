
export function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            STORE
          </a>
          
          <nav className="nav">
            <div className="carrito">
              <svg className="carrito-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              
              <div className="carrito-dropdown">
                {isEmpty ? (
                  <div className="cart-empty">
                    Tu carrito está vacío
                  </div>
                ) : (
                  <>
                    <div className="carrito-items">
                      {cart.map(item => (
                        <div key={item.id} className="carrito-item">
                          <img
                            src={`/img/${item.image}.jpg`}
                            alt={item.name}
                          />
                          <div className="carrito-item-info">
                            <div className="carrito-item-name">{item.name}</div>
                            <div className="carrito-item-price">${item.price}</div>
                            <div className="quantity-controls">
                              <button 
                                className="quantity-btn" 
                                onClick={() => decreaseQuantity(item.id)}
                                aria-label="Disminuir cantidad"
                              >
                                −
                              </button>
                              <span className="quantity-display">{item.quantity}</span>
                              <button 
                                className="quantity-btn" 
                                onClick={() => increaseQuantity(item.id)}
                                aria-label="Aumentar cantidad"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button 
                            className="btn btn-danger btn-small" 
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Eliminar producto"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="cart-total">
                      <div className="cart-total-text">
                        Total: ${cartTotal}
                      </div>
                      <button 
                        className="btn btn-primary w-full" 
                        onClick={clearCart}
                      >
                        Vaciar Carrito
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
