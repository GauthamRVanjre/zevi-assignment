import React from "react";
import Navbar from "../components/navbar";

const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  /**
   * When the user types in the search box, the value of the search box is set to the state of the
   * search term.
   * @param event - The event object is a JavaScript event that is sent to an element when an event
   * occurs on the element.
   */
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar home={true} wishlist={false} />

      <section className="search-component ">
        <div className="search-input-container">
          <label className="search-input-field-container">
            <input
              onChange={handleSearchTermChange}
              type="text"
              placeholder="Articles names or keywords"
            />
          </label>
          <span className="bg-black p-2 text-white">Search</span>
        </div>
      </section>
    </>
  );
};

export default Home;
