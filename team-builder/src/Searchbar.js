import React, {useState} from 'react';

function Searchbar(props) {
    const [newTeam, setNewTeam] = useState({name: ""});

    function handleChange(e) {
        props.setSearchInput(e.target.value);
    }

    function addTeam(e) {
        setNewTeam({[e.target.name]:e.target.value})
    }

    function submitTeam(e) {
        e.preventDefault();
        props.setTeam([...props.team, newTeam])
        setNewTeam({name: ""});
    }

    return (
        <>
        <form>
            <label htmlFor="teammates">Search teammates</label>
            <input type="text" id="teammates" onChange={handleChange} value={props.searchInput} />
        </form>

        <form onSubmit={submitTeam}>
            <label htmlFor="addTeam">Add teammate</label>
            <input type="text" id="addTeam" onChange={addTeam} name='name' value={newTeam.name} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Searchbar