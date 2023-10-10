import React from "react";
import Navbar from "../components/navbar";

const NoPage = () => {
  return (
    <>
      <Navbar home={false} wishlist={false} />
    </>
  );
};

export default NoPage;
