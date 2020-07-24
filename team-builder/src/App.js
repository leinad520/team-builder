import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css'
import Searchbar from './Searchbar'

const teammates = [
  {name: 'Daniel'}, {name: 'Jess'}, {name: 'Kiran'}
]


function App() {
  const [team, setTeam] = useState(teammates);
  const [searchInput, setSearchInput] = useState("")
  console.log(searchInput)

  return (
    <>
    <Searchbar setSearchInput={setSearchInput} setTeam={setTeam} team={team} />
    <div className="App">
      {team.filter(person => person.name.toLowerCase().includes(searchInput.toLowerCase())).map(person => <ul>{person.name}</ul>)}
    </div>
    </>
  );
}

export default App;
