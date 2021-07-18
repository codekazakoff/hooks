import React, { useState, useEffect } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Form = () => {
  const [count, setCount] = useState(0);

  const [isLike, setIsLike] = useState(false);

  const [data, setData] = useState([]);
  // componentDidMount with ComponentDidUpdate
  //   useEffect(() => {
  //     console.log("UseEffect ComponentDidUpdate with componentDidMount");
  //   });

  // componentDidMount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
    //  console.log("ComponentDidMount useEffect");
  }, []);

  //   useEffect(async () => {
  //    try {
  //      const res = await fetch("https://fakestoreapi.com/products");
  //      const data = await res.json();
  //      setData(data);
  //    } catch (e) {
  //      console.error(e);
  //    }
  //  }, []);

  // ComponentDidUpdate
  //   useEffect(() => {
  //  console.log("Count Update boganda ishlagin");
  //   }, [isLike]);

  //   ComponentWillUnMount

  useEffect(() => {
    return () => {
      console.log("obComponentWillUnMount ishga tushdi");
    };
  }, []);

  const handleCheck = () => {
    setIsLike((prev) => !prev);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleLike = () => {
    setIsLike((prev) => !prev);
  };

  if (data.length === 0) return <h2>Loading ....</h2>;
  return (
    <div>
      <p>{count}</p>
      <p>{isLike ? "True" : "False"}</p>
      <span>
        {isLike ? (
          <AiFillHeart size="2rem" color="#ff5252" />
        ) : (
          <AiOutlineHeart size="2rem" color="#ff5252" />
        )}
      </span>
      <button onClick={handleDecrement}> Decrement </button>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleCheck}> Degree </button>
      <button onClick={handleLike}> Like </button>
      {data.map((item) => (
        <p key={item.id}>
          <img src={item.image} alt="" />
        </p>
      ))}
    </div>
  );
};

export default Form;
