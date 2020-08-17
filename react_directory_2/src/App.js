import React, { Component } from 'react';
import './App.css';
import Table from "./components/Table"
import TextBox from "./components/Input"
import API from "./utils/API"

class App extends Component {

  state = {
    employeeList: [],
    filteredList: [],
    lastName: "",
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
      if(this.state.search.toLowerCase() === person.name.first.toLowerCase()) {
        return person.name.first.toLowerCase() === this.state.search.toLowerCase();
      } else {
        return person.name.last.toLowerCase() === this.state.search.toLowerCase();
      }
    });
    this.setState({ filteredList: filteredArr })
    console.log(this.state.filteredList)

  };
  

  handleToggle = () => {
    let listAZ = new Array (...employeeList) 
    console.log("THIS IS LISTAZ" + listAZ);
    let sortof = listAZ.sort((a,b) => {
      return (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 :0)

    })
    this.setState({lastName:sortof})
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
