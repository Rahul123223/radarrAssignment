import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Movies() {
  const [movies, setMovies] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://anapioficeandfire.com/api/characters"
    );

    setMovies(response.data);
    console.log(response);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Movies</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {movies &&
          movies.map((movie, index) => {
            return (
              <div className="book" key={index}>
                <h3>Movie {index + 1}</h3>
                <h3>{`Name : ${movie.name}`}</h3>

                <div className="details">
                    <p>{`Tittle : ${movie.titles}`}</p>
                  <p>{`Culture : ${movie.culture}`}</p>
                  <p>{`Gender : ${movie.gender}`}</p>
                  <p>{`aliases : ${movie.aliases}`}</p>
                  <p>{`tvSeries : ${movie.tvSeries}`}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
