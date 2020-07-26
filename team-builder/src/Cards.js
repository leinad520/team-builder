import React from 'react';
import './App.css'


function Cards(props) {

  return (
    <>
    <div className="card">
      {props.team.filter(person => person.name.toLowerCase().includes(props.searchInput.toLowerCase()))
      .map(person => {
      return (
      <ul class="person-box">
        <li>Name: {person.name}</li>
        <li>Email: {person.email}</li>
        <li>Role: {person.role}</li>
      </ul>
      )
    })
    }
    </div>
    </>
  );
}

export default Cards;
