import React from 'react';
import '../css/ProductsScreen.css'; 

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción breve del producto 1.',
    image: 'https://via.placeholder.com/300x200?text=Producto+1'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción breve del producto 2.',
    image: 'https://via.placeholder.com/300x200?text=Producto+2'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción breve del producto 3.',
    image: 'https://via.placeholder.com/300x200?text=Producto+3'
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Descripción breve del producto 4.',
    image: 'https://via.placeholder.com/300x200?text=Producto+4'
  }
];

const ProductsScreen = () => {
  return (
    <div className="products-container">
      <h2 className="mb-4">Nuestros Productos</h2>
      <div className="card-deck">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;
