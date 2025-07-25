export function Cloth({ cloth, addToCart }) {
  const { name, price, description, image } = cloth;

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
            onClick={() => addToCart(cloth)}
            aria-label={`Agregar ${name} al carrito`}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
