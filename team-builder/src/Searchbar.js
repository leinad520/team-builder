import React, {useState} from 'react';

function Searchbar(props) {
    const [newTeam, setNewTeam] = useState({name: "", email: "", role: ""});

    function handleChange(e) {
        props.setSearchInput(e.target.value);
    }

    function addTeam(e) {
        setNewTeam({...newTeam, [e.target.name]:e.target.value})
    }

    function submitTeam(e) {
        e.preventDefault();
        props.setTeam([...props.team, newTeam])
        setNewTeam({name: "", email: "", role: ""});
    }

    return (
        <>
        <form>
            <label htmlFor="teammates">Search teammates</label>
            <br></br>
            <input type="text" id="teammates" onChange={handleChange} value={props.searchInput} />
        </form>

        <br></br>

        <form onSubmit={submitTeam}>
            <h3>Add teammate</h3>
            <label htmlFor="name">Name</label>
            <br></br>
            <input type="text" id="name" onChange={addTeam} name='name' value={newTeam.name} />
            <br></br>

            <label htmlFor="name">Email</label>
            <br></br>
            <input type="text" id="email" onChange={addTeam} name='email' value={newTeam.email} />
            <br></br>

            <label htmlFor="name">Role</label>
            <br></br>
            <input type="text" id="role" onChange={addTeam} name='role' value={newTeam.role} />
            <br></br>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Searchbar