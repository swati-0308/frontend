import "../src/styles/style.css"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useGetAllEmployeesQuery,useDeleteEmployeeByIdMutation } from "./services/EmployeeService"
import {MdOutlineDelete,MdOutlineEdit} from "react-icons/md";
const EmployeeList = () => {
  const { data, error, isLoading } = useGetAllEmployeesQuery();
  console.log(data);
  const navigate = useNavigate();
  const [deleteEmployeeById, result] = useDeleteEmployeeByIdMutation();

  return (
    <>
      <div className="sidenav">
        <div>
          <img src="assets/logo.png" alt="keyvalue" />
        </div>
        <div className="left">
            <div className="circle">
                <img src="./assets/List.png" id="emplistpic" alt="list"/>
            </div>
            <p className="para-left">Employee List</p>
        </div>
      </div>
      <div>
        <h1 id="employeelist_heading">Employee List</h1>
        <h4 id="filter" style={{marginTop:-50}}>Filter By
        <button id="createemployeebtn" style={{color:"black",marginLeft:150,marginTop:-400}} onClick={() => navigate("/create")}>
         Create Employee
        </button></h4>
      </div>
      <div>
        <table id="employeelisttable">
          <tbody>
            <tr id="listheadings">
              <th>Employee name</th>
              <th>Employee Id</th>
              <th>Department</th>
              <th>Role</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              data.data.map((item) => {
                //console.log(item);
                return (
                  <tr className="employeelistcard">
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.department.name}</td>
                    <td>{item.role}</td>
                    <td>{item.experience}</td>
                    <td>{item.status}</td>
                    <td><MdOutlineDelete className="delete" onClick={() => {
                     deleteEmployeeById(item.id);
                    }}/></td>
                    <td><MdOutlineEdit className="edit" onClick={() => {
                    navigate(`/details/${item.id}`)
                    }}/></td>
                  </tr>
                );
              })
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default EmployeeList;
