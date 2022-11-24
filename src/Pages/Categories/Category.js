import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category, index }) => {

    // console.log(index);
  return (
    <div className="px-2 py-4 ml-16 mr-12 bg-slate-300">
        <Link to={`/category/${index}`}>
            <h1 className="font-bold text-center text-xl">{category}</h1>
        </Link>
    </div>
  );
};

export default Category;
