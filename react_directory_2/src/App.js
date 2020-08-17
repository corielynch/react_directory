import React, { Component } from 'react';
import './App.css';
import Table from "./components/Table"
import TextBox from "./components/Input"
import API from "./utils/API"

class App extends Component {

  state = {
    employeeList: [],
    filteredList: [],
    switch: "",
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
    if(this.state.search === "") {
      this.setState({ filteredList: this.state.employeeList})
    } else { 

      const filteredArr = this.state.employeeList.filter(person => {
        if(this.state.search.toLowerCase() === person.name.first.toLowerCase()) {
          return person.name.first.toLowerCase() === this.state.search.toLowerCase();
        } else {
          return person.name.last.toLowerCase() === this.state.search.toLowerCase();
        }
      });
      this.setState({ filteredList: filteredArr })
    }
  };
  

  handleToggle = () => {
    let listAZ = new Array (...this.state.filteredList) 
    let sortof = listAZ.sort((a,b) => {
      return (a.name.last > b.name.lasta) ? 1 : ((b.name.last > a.name.last) ? -1 :0)

    })

    
    this.setState({ filteredList: sortof })
  }


  render() {
    return (
      <>
        <TextBox
          handleInputChange={this.handleInputChange}
          employeeList={this.state.employeeList}
          handleFormSubmit={this.handleFormSubmit}
          handleToggle={this.handleToggle}



        />
        <Table
          employeeList={this.state.filteredList}
        

        />

      </>
    )
  }

}

export default App;
