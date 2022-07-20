import "../src/styles/style.css"
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useGetEmployeeByIdQuery} from "./services/EmployeeService"
import { useParams } from "react-router-dom";
const EmployeeDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { data, error, isLoading } = useGetEmployeeByIdQuery(id);

  return (
    <>
       
      <div className="sidenav">
        <div>
          <img src="assets/logo.png" alt="keyvalue" />
        </div>
        <div class="left">
            <div class="circle">
                <img src="./assets/List.png" id="emplistpic" alt="list"/>
            </div>
            <p class="para-left">Employee List</p>
        </div>
      </div>
      <div>
        <h1 id="employeelist_heading">Employee Details</h1>
       
        <button type="button" id="createemployeebtn" style={{color:"black"}} onClick={() => navigate(`/update/${id}`)
              }>Edit</button>
       
        </div>
      <div id="formsession" style={{height:230, marginTop:-10}}>
          
      {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
                <div>
                  <div className="enadd">
                  <label>Employee Name</label><br/>
                  <label>{data.data.name}</label><br/><br/>
                  <label>Employee Address</label><br/>
                  <label>{data.data.address.address}</label><br/><br/>
                  </div>
                  <div className="eid">
                  <label>Employee Id</label><br/>
                  <label>{data.data.id}</label><br/><br/>
                  </div>
                  <div className="role">
                  <label>Role</label><br/>
                  <label>{data.data.role}</label><br/><br/>
                  </div>
                  <div className="status">
                  <label>Status</label><br/>
                  <label>{data.data.status}</label><br/><br/>
                  </div>
                  <div className="exp">
                  <label>Experience</label><br/>
                  <label>{data.data.experience}</label><br/><br/>
                  </div>
                  <div className="jd">
                  <label>Joining Date</label><br/>
                  <label>{data.data.jdate}</label><br/><br/>
                  </div>
                  <div className="pwd">
                  <label>Password</label><br/>
                  <label>{data.data.password}</label><br/><br/>
                  </div>

                </div>
             
            ) : null}
      </div>
    </>
  ); 

}
export default EmployeeDetails;