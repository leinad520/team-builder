import React, {useState, useEffect} from 'react';

function Searchbar(props) {
    // const [newTeam, setNewTeam] = useState({name: "", email: "", role: ""});

    function handleChange(e) {
        props.setSearchInput(e.target.value);
    }

    function addTeam(e) {
        props.setNewTeam({...props.newTeam, [e.target.name]:e.target.value})
    }

    function submitTeam(e) {
        e.preventDefault();
        if(props.memberToEdit) props.editMember();
        else {
            props.setTeam([...props.team, props.newTeam])
            props.setNewTeam({name: "", email: "", role: ""});
        }
    }

    useEffect(() => {
        if (props.memberToEdit) {
            props.setNewTeam(props.memberToEdit);
        }
    }, [props.memberToEdit])

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
            <input type="text" id="name" onChange={addTeam} name='name' value={props.newTeam.name} />
            <br></br>

            <label htmlFor="name">Email</label>
            <br></br>
            <input type="text" id="email" onChange={addTeam} name='email' value={props.newTeam.email} />
            <br></br>

            <label htmlFor="name">Role</label>
            <br></br>
            <input type="text" id="role" onChange={addTeam} name='role' value={props.newTeam.role} />
            <br></br>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Searchbar