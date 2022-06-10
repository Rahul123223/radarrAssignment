import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Houses() {
  const [houses, setHouses] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://anapioficeandfire.com/api/houses"
    );

    setHouses(response.data);
    console.log(response);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Houses</h1>
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
        {houses &&
          houses.map((house, index) => {
            const authors = house.titles.join(", ");
            const swornMembers = house.seats.join(",");

            return (
              <div className="book" key={index}>
                <h3>House {index + 1}</h3>
                <h3>{`Name : ${house.name}`}</h3>

                <div className="details">
                  <h3>{`Tittle : ${authors}`}</h3>
                  <p>{`coatOfArms : ${house.coatOfArms}`}</p>
                  <p>{`Region : ${house.region}`}</p>
                  <p>{`seats : ${swornMembers}`}</p>
                  <p>{`Words : ${house.words}`}</p>
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
