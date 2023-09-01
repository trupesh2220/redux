import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS, fetchProducts } from "../store/productSlice";

function Products() {
  //   const [Products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);
  const handelAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUS.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUS.ERROR) {
    return <h2>something is wrong</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
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
