import React ,{useEffect,useState} from "react";
import "./Table.css";
import axios from 'axios';


export default function Table({UpdateUser,DeleteUser}) {

const [data,setData]=useState([])

useEffect(() => {
 async function FetchData(){
  try {
    // const FetchUser=await axios.get("http://localhost:5000/api/get")
    const FetchUser = await axios.get("https://depresion-1.onrender.com/api/get");

    const response=FetchUser.data
    
    setData(response)
  } catch (error) {
    console.log(error);
    
  }
   
 }
 FetchData();
}, [data]);


  return (
    <div>

<div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Employees</b></h2>
        </div>
        <div className="col-sm-6">
          <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
            <i className="material-icons">&#xE147;</i>
            <span>Add New Employee</span>
          </a>
        </div>
      </div>
    </div>
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Father</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.user?.map((elm, index) => (
            <tr key={index}>
              <td></td>
              <td>{elm.name}</td>
              <td>{elm.fathername}</td>
              <td>{elm.email}</td>
              <td>{elm.phone}</td>
              <td>
                <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateUser(elm._id)}>
                  <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                </a>
                <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => DeleteUser(elm._id)}>
                  <i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>




    </div>
  );
}


