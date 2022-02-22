import React, {useState, useEffect} from 'react'
import Filter from "./components/filter";
import Form from "./components/form";
import Persons from "./components/persons";
import axios from "axios";


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect( () =>{
    axios.get("http://localhost:3001/persons")
        .then( response => setPersons(response.data) )
    }, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.filter( p => p.name === newName ).length > 0){
      alert(`${newName} is already added to phonebook`);
      return
  }
  axios.post("http://localhost:3001/persons", {name: newName, number: newNumber, id: persons.length+1} )
  .then( response => setPersons( persons.concat(response.data) ) )
    setNewName("")
    setNewNumber("")
  }

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  const personsToShow = persons.filter( p => p.name.toLowerCase().startsWith(filter.toLowerCase()) )

  return (
    <div>
        <h2>Phonebook</h2>
        <Filter filter={filter} changeHandler={handleFilterChange}/>
        <h3>Add a new</h3>
        <Form
            newName={newName}
            newNameChangeHandler={handleNewNameChange}
            newNumber={newNumber}
            newNumberChangeHandler={handleNewNumberChange}
            addName={addName}/>
        <h3>Numbers</h3>
        <Persons personsToShow={personsToShow}/>
    </div>
)
  }
export default App