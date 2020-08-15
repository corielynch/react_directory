import React from 'react';
import { Table } from 'reactstrap';

const TableView = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>

        </tr>
      </thead>
      <tbody>
        {props.employeeList.length > 0 ? props.employeeList.map((employee, ID) => {
          return (<tr>
            <th scope="row">{ID+1}</th>
          <td> <img src =  {employee.picture.thumbnail} /> </td>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
           </tr>)
        }): (
 <tr>
 <th scope="row"></th>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
</tr>
        )  }
       
        
      </tbody>
    </Table>
  );
}

export default TableView;