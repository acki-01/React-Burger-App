import React, { Component } from "react";
import classes from "./App.css";
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Arek", age: "30" },
      { id: 2, name: "Marta", age: "26" },
      { id: 3, name: "Agnieszka", age: "29" }
    ],
    showPersons: false
  };
  togglePersonsHandler = event => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  nameChanger = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  deletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          cicked={this.deletePerson}
          changed={this.nameChanger}
        />
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
