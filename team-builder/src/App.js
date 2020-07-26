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
  const [newTeam, setNewTeam] = useState({name: "", email: "", role: ""});
  const [memberToEdit, setMemberToEdit] = useState("");

  function editMember() {
    for (let i=0; i<team.length; i++) {
      if (team[i] === memberToEdit) team[i] = newTeam;
    }
    setMemberToEdit("");
    setNewTeam({name: "", email: "", role: ""});

  }

  return (
    <>
    <Searchbar setSearchInput={setSearchInput} setTeam={setTeam} team={team} memberToEdit={memberToEdit} editMember={editMember} newTeam={newTeam} setNewTeam={setNewTeam}/>
    <Cards team={team} searchInput={searchInput} setMemberToEdit={setMemberToEdit} />
    </>
  )
}
export default App;
