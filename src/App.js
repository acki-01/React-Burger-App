import React, { Component } from "react";
import classes from "./App.css";
import Person from "./components/Persons/Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePerson(index)}
                  nameChanger={event => this.nameChanger(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>hi im react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
