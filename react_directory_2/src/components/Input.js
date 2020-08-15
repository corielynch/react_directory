import React from "react";

function TextBox(props) {
   return (
    <form className="search">
        <label htmlFor="employee"></label>

       <input
       value={props.search}
       onChange={props.handleInputChange}
       name="employee"
       list="employees"
       type="text"
       className="form-control"
       placeholder="Search an Employee"
       id="employee"/>
       <datalist id="emloyees">
          {props.employeeList.map(employeeList => (
            <option value={employeeList} key={employeeList} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
    </form>
   )
}

export default TextBox;
