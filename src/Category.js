import React from "react";
import { useState } from "react";
import "./App";
import Categories from "./Categories";

const Category = () => {
  const [data, setData] = useState(Categories);

  const filterData=(categeoryItem)=>{
    const result = Categories.filter((currentData)=>{
        return currentData.category===categeoryItem;
    });
    setData(result)
  }
  return (
    <>
      <h1>Shopping App</h1>
      <button onClick={()=>{setData(Categories)}}>All</button>
      <button onClick={()=>{filterData("men's clothing")}}>Men's Clothing</button>
      <button onClick={()=>{filterData("women's clothing")}}>Women's Clothing</button>
      <button onClick={()=>{filterData("electronics")}}>Electronics</button>
      <button onClick={()=>{filterData("jewelery")}}>Jewellary</button>
      <div className="App">
        {data.map((val, ind) => {
          return (
            <div key={ind}>
              <p>Category: <h2>{val.category}</h2> </p>
              <img src={val.image} alt="" height={300} />
              <h3><span>Price : </span>$ {val.price}</h3>
              <h3>Title: {val.title} </h3>
              <p>Rating - {val.rating.rate} </p>
              <p> <b> Description:</b> {val.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
