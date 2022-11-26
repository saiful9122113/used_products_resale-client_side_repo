import React from "react";

const MyProductCard = ({product}) => {
    const { ProductImg, category, condition, description, email, location, mobileNumber, productName, productOriginalPrice, productResalePrice, purchaseYear, timestamp } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-[550px]">
        <figure>
          <img className="max-h-60" src={ProductImg} alt="Product" />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-2">
            <h2 className="card-title">{productName}</h2>
            <p>Condition: <strong>{condition}</strong></p>
          </div>
          <div className="grid grid-cols-2">
            <p>Types: {category}</p>
            <p>Resale Price: <strong>{productResalePrice}</strong></p>
          </div>
          <div className="grid grid-cols-2">
            <p>Locationb: {location}</p>
            <p>Original Price: <strong>{productOriginalPrice}</strong></p>
          </div>
          <p>{description}</p>
          <p>Post time:{timestamp}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
