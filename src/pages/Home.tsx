import React from "react";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar home={true} wishlist={false} />
    </>
  );
};

export default Home;
