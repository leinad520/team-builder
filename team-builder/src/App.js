import React, {useState} from 'react';
import './App.css'
import Searchbar from './Searchbar'
import Cards from './Cards'

const teammates = [
  {
    name: 'Daniel',
    email: 'ksydaniel@gmail.com',
    role: 'poker player'
}, 
{
  name: 'Jess',
  email: 'jess@gmail.com',
  role: 'frontend engineer'
}, 
{
  name: 'Kiran',
  email: 'kiran@gmail.com',
  role: 'backend engineer'
}
]

function App() {
  const [team, setTeam] = useState(teammates);
  const [searchInput, setSearchInput] = useState("")
  // const [memberToEdit, setMemberToEdit] = useState();

  return (
    <>
    <Searchbar setSearchInput={setSearchInput} setTeam={setTeam} team={team} />
    <Cards team={team} searchInput={searchInput} />
    </>
  )
}
export default App;
