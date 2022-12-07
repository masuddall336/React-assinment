import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import fakeData from '../src/player.json'
import { useEffect, useState } from 'react';
import Players from './Players/Players';
import Myteam from './Myteam/Myteam';
function App() {
  let [players, setPlayers] = useState([]);
  let [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayers(fakeData);
  },[])
  let handle = (players) =>{
    console.log("Clicked", players);
    let newPlayer = [...player, players];
    setPlayer(newPlayer);
  }
  console.log(players);
  return (
    <div className="App">
      <header className="App-header">
        <div className='allPlayers'>
          {
            players.map(players => <Players handle={handle} players={players}></Players>)
          }
        </div>
          <div className='myteam'>
            <Myteam playerr={player}></Myteam>
          </div>
      </header>
    </div>
  );
}

export default App;
