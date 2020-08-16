import React from "react";

function TextBox(props) {
  return (
    <div>
      <h1>Employee Directory</h1>
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
          {props.employeeList.map(employeeList => (
            <option value={employeeList} key={employeeList} />
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
