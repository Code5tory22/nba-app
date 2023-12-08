import { useState, useEffect } from "react";

function App() {
  const [players, setPlayers] = useState("");

  async function NBAData() {
    const url = "https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1158b94046msh17179fdd8e7c662p131ecejsn1be4707ebfaf",
        "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    setPlayers(result.response);
  }

  useEffect(() => {
    NBAData();
  }, []);

  console.log(players)

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={NBAData}>Search</button>
      {players.map((player) => {
        return (
          <ul>
            <li>{player.firstname}</li>
          </ul>
        )
      } )}
    </div>
  );
}

export default App;
