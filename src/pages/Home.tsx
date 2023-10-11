import React from "react";
import SuggestionBox from "../components/SuggestionBox";
import ProductsList from "../components/ProductsList";

const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  /**
   * The handleInputClick function toggles the visibility of suggestions.
   */
  const handleInputClick = () => {
    setShowSuggestions(!showSuggestions);
  };

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
      <section className="search-component ">
        <div className="search-input-container">
          <label className="search-input-field-container">
            <input
              onChange={handleSearchTermChange}
              onClick={handleInputClick}
              type="text"
              placeholder="Articles names or keywords"
            />
            <span className="icon-spacer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="10px"
                y="10px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </span>
          </label>
          {showSuggestions && <SuggestionBox />}
        </div>
        <div className="flex flex-col ml-4 justify-center w-full align-center ">
          <ProductsList />
        </div>
      </section>
    </>
  );
};

export default Home;
