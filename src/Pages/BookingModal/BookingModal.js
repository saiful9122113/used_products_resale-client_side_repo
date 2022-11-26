import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({product}) => {
    const { productName, productResalePrice } = product;
    const { user } = useContext(AuthContext);
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Product Name : {productName}</h3>
          <p className="py-4">Product Price : {productResalePrice}</p>
          <form className="grid grid-cols-1 gap-3">
            <input type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
            <input type="text" defaultValue={user?.email} disabled className="input input-bordered w-full" />
            <input type="text" placeholder="Type here location" className="input input-bordered w-full" />
            <input type="number" placeholder="Type Your Number" className="input input-bordered w-full" />
            <input className="w-full btn btn-primary" type="submit" value="Submit" />
        </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
