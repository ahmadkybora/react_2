import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import reactDom from 'react-dom';
import Person from './Person/Person';

function App() {

  const persons = [
    {id: 1, name: 'a', age: '1'},
    {id: 2, name: 'b', age: '2'},
    {id: 3, name: 'c', age: '3'},
    {id: 4, name: 'd', age: '4'},
  ]

  const indexUser = () => {
    const a = 2;
    return a;
  }

  const createUser = () => {

  }

  const showUser = () => {

  }

  const deleteUser = (index) => {
    return alert(index);
  }

    return (
      <div className="App">
        {persons.map((person, index) => {
          return <Person 
          click={() => {deleteUser(index)}}
          key={person.id}
          name={person.name} 
          age={person.age}>
          </Person>
        })}
      </div>
    );
}

export default App;
