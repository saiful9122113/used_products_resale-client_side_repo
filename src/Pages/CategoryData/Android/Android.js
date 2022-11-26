import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyProductCard from "../../MyProductCard/MyProductCard";

const Android = () => {
  const { user } = useContext(AuthContext);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    if (!user.email) return;
    fetch("http://localhost:5000/product/Android", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, [user.email]);
  return (
    <div>
      <div>
        <h1>Android</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 mt-6">
        {
            categoryData.map(product=><MyProductCard
            key={product._id}
            product={product}
            ></MyProductCard>)
        }
      </div>
    </div>
  );
};

export default Android;
