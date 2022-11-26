import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("Android");
  const [selectedCondition, setSelectedCondition] = useState("Good");
  const [textAreaValue, setTextAreaValue] = useState(null);
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const productName = form.productName.value;
    const productOriginalPrice = form.productOriginalPrice.value;
    const productResalePrice = form.productResalePrice.value;
    const category = selectedCategory;
    const condition = selectedCondition;
    const mobileNumber = form.mobileNumber.value;
    const purchaseYear = form.purchaseYear.value;
    const location = form.location.value;
    const description = textAreaValue;
    const img = form.img.files[0];

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {

          const productInfo = {
            email,
            productName,
            productOriginalPrice,
            productResalePrice,
            category,
            condition,
            mobileNumber,
            purchaseYear,
            location,
            description,
            ProductImg: imgData.data.url,
            timestamp: new Date().toUTCString(),
          };
          console.log(productInfo);
          fetch("http://localhost:5000/add-product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Product added successfully");
              form.reset();
            })
            .catch((er) => console.error(er));
        }
      });
  };

  const handleProductCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleProductCondition = (e) => {
    setSelectedCondition(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold">
          Fill up the form to add a product
        </h1>
      </div>
      <form onSubmit={handleAddProduct} className="card-body mx-auto w-2/3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Resale Price</span>
          </label>
          <input
            type="number"
            name="productResalePrice"
            placeholder="Product Resale Price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Original Price</span>
          </label>
          <input
            type="number"
            name="productOriginalPrice"
            placeholder="Product Original Price"
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <select
            defaultValue={"Android"}
            className="select select-bordered w-full"
            onChange={handleProductCategory}
          >
            <option value={"Android"}>Android</option>
            <option value={"Landline"}>Landline</option>
            <option value={"Button"}>Button</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Product Condition</span>
          </label>
          <select
            onChange={handleProductCondition}
            defaultValue={"Good"}
            className="select select-bordered w-full"
          >
            <option value={"Excellent"}>Excellent</option>
            <option value={"Good"}>Good</option>
            <option value={"Fair"}>Fair</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            name="mobileNumber"
            placeholder="Your mobile number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Purchase Year</span>
          </label>
          <input
            type="number"
            name="purchaseYear"
            placeholder="Product purchase year"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            onChange={handleTextArea}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            name="img"
            accept="image/png, image/gif, image/jpeg, image/*"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
