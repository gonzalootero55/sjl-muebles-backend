import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
// ❌ ya no usamos esto
// import products from '../data/products';
import Filters from '../components/Filters';
import './ProductList.css';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filters, setFilters] = useState({ category: 'Todos', minPrice: 0 });

  // TRAER DATOS DEL BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProductList(data))
      .catch(err => console.error(err));
  }, []);

  // filtro (igual que tenías)
  const filteredProducts = productList.filter(product => {
    const categoryMatch =
      filters.category === 'Todos' || product.category === filters.category;
    const priceMatch = product.price >= filters.minPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="product-list-page">
      <h2>Catálogo de Muebles</h2>
      <div className="content-layout">
        <aside className="sidebar">
          <Filters setFilters={setFilters} currentFilters={filters} />
        </aside>
        <main className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No hay productos que coincidan con los filtros.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductList;