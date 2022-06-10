import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <Link to="/books">
          <li>Books</li>
        </Link>
        <Link to="/movies">
          <li>Movies</li>
        </Link>
        <Link to="/houses">
          <li>Houses</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
