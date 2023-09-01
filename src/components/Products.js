import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function Products() {
  const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);
  const handelAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {Products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handelAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
