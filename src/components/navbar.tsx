import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  home: boolean;
  wishlist: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ home, wishlist }) => {
  return (
    <>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link
            to={"/"}
            className={
              home
                ? `text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white`
                : `text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4`
            }
          >
            Home
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            to={"/wishlist"}
            className={
              wishlist
                ? `text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white`
                : `text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4`
            }
          >
            Wishlist
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
