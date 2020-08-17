import React from "react";

function TextBox(props) {
  return (
    <div>
      <h1>Employee Directory</h1>


      <label class="switch">
        <input 
        type="checkbox"
        name= "lastName"
        ></input>
        <span class="slider round" onClick={props.handleToggle}></span>
        <p>Sort A-Z</p>
      </label> 



      <form className="search">
        <label htmlFor="employee"></label>


        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search an Employee by First or Last Name"
          id="employee" />
        <datalist id="emloyees">
          {props.employeeList.map((employeeList, index) => (
            <option value={employeeList} key={index} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </form>
    </div>
  )
}

export default TextBox;
