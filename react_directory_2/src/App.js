import React, { Component } from 'react';
import './App.css';
import Table from "./components/Table"
import TextBox from "./components/Input"
import API from "./utils/API"

class App extends Component {

  state = {
    employeeList: [],
    filteredList: [],
    search: ""
  }

  componentDidMount() {
    API.search().then(response => {
      this.setState({ employeeList: response.data.results })
      this.setState({ filteredList: response.data.results })

    })
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const filteredArr = this.state.employeeList.filter(person => {
      return person.name.first.toLowerCase() == this.state.search.toLowerCase();
    });
    this.setState({ filteredList: filteredArr })

    const filteredLastNameArr = this.state.employeeList.filter(person => {
      return person.name.last.toLowerCase() === this.state.search.toLowerCase();
    });
    this.setState({ filteredList: filteredLastNameArr })
  };

  render() {
    return (
      <>
        <TextBox
          handleInputChange={this.handleInputChange}
          employeeList={this.state.employeeList}
          handleFormSubmit={this.handleFormSubmit}


        />
        <Table
          employeeList={this.state.filteredList}

        />

      </>
    )
  }

}

export default App;
