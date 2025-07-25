export function Guitar({ guitar, addToCart }) {
  const { name, price, description, image } = guitar;

  return (
    <div className="product-card fade-in">
      <img 
        className="product-image" 
        src={`/img/${image}.jpg`} 
        alt={name}
      />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price}</div>
        <div className="product-actions">
          <button 
            className="btn btn-primary w-full"
            onClick={() => addToCart(guitar)}
            aria-label={`Agregar ${name} al carrito`}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
