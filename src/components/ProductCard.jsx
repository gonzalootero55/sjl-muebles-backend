import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = ({ product }) => {
  const { _id, name, price, image } = product;

  return (
    <Link to={`/producto/${_id}`} className="card-link" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-card">
        <img
          src={image}
          alt={name}
          style={{ width: '100%', borderRadius: '8px' }}
        />

        <h3>{name}</h3>
        <p className="product-category">{product.category?.name}</p>

        <button className="btn-detail">
          Ver detalles
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;