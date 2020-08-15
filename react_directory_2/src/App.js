import React, {Component} from 'react';
import './App.css';
import Table from "./components/Table"
import TextBox from "./components/Input"
import API from "./utils/API"

class App extends Component {
  
    state = {
        employeeList: [], 
        search: ""
    }

    componentDidMount () {
        API.search().then(response => {
            console.log(response.data.results)
                this.setState({employeeList: response.data.results})      
        })
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

       SearchResults(props) {
        return (
          <ul className="list-group search-results">
            {props.results.map(result => (
              <li key={result} className="list-group-item">
                <img alt="Dog" src={result} className="img-fluid" />
              </li>
            ))}
          </ul>
        );
      }


  render () {
    return (
        <>
        <TextBox
         handleInputChange={this.handleInputChange}
         employeeList={this.state.employeeList}
         handleFormSubmit={this.handleFormSubmit}


         />
        <Table 
        employeeList={this.state.employeeList}
        SearchResults={this.SearchResults}

        />
        
        </>
    )
  }
   
}

export default App;
