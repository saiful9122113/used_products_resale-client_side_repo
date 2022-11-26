import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyProductCard from "../../MyProductCard/MyProductCard";
import Loading from "../../Shared/Loading/Loading";

const Android = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    setLoading(true);
    if (!user.email) return;
    fetch("http://localhost:5000/product/Android", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategoryData(data);
      });
  }, [user.email]);

  if(loading){
    return <Loading></Loading>
  };
  
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">Android</h1>
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
