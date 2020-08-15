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
    

  render () {
    return (
        <>

        {console.log("here",this.state.employeeList)}
        <TextBox/>
        <Table employeeList={this.state.employeeList}/>
        
        </>
    )
  }
   
}

export default App;
