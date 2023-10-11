import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <body className="nopage-container">
        <div className="text-center pt-20">
          <h2>Uh oh! lost track?</h2>
          <Link to="/">Click here to go to home page</Link>
        </div>
      </body>
    </>
  );
};

export default NoPage;
