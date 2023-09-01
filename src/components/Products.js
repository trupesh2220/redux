import React, { useEffect, useState } from "react";

function Products() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {Products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
