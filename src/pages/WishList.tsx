import React from "react";
import Navbar from "../components/navbar";

const WishList = () => {
  return (
    <>
      <Navbar home={false} wishlist={true} />
    </>
  );
};

export default WishList;
