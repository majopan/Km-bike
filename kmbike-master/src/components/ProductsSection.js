import React from 'react';
import '../styles/ProductsSection.css';
import img from '../assets/ANTHEM.png'; 
import img3 from '../assets/Bici5.jpg'
import img4 from '../assets/conten.jpg'


const products = [
  {
    name: 'ANTHEM ADVANCED PRO 29',
    currentPrice: '$25.043.550',
    oldPrice: '$29.463.000',
    image: `${img}`,
  },
  {
    name: 'BICICLETA CONTEND SL 2 DISC',
    currentPrice: '$4.743.000',
    oldPrice: '$6.200.000',
    image: `${img4}`,
  },
  {
    name: 'REIGN SX',
    currentPrice: '$20.990.750',
    oldPrice: '$24.695.000',
    image: `${img3}`,
  },
];

const ProductsSection = () => (
  <section className="products-section">
    <h2>Bicicletas más usadas por deportistas</h2>
    <div className="products-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">
            <span className="current-price">{product.currentPrice}</span>
            <span className="old-price">{product.oldPrice}</span>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductsSection;
