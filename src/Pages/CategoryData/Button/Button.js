import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyProductCard from "../../MyProductCard/MyProductCard";

const Button = () => {
  const { user } = useContext(AuthContext);
  const [categoryDat, setCategoryDat] = useState([]);
  useEffect(() => {
    if (!user.email) return;
    fetch("http://localhost:5000/product/Button", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryDat(data);
      });
  }, [user.email]);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">Button</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 mt-6">
        {
            categoryDat.map(product=><MyProductCard
            key={product._id}
            product={product}
            ></MyProductCard>)
        }
      </div>
    </div>
  );
};

export default Button;
