import "../src/styles/style.css"
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useGetEmployeeByIdQuery} from "./services/EmployeeService"
import { useParams } from "react-router-dom";
import logo from "./assets/logo.png"
import list from "./assets/List.png"

const EmployeeDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { data, error, isLoading } = useGetEmployeeByIdQuery(id);

  return (
    <>
       
      <div className="sidenav">
        <div>
          <img src={logo} alt="keyvalue" />
        </div>
        <div className="left">
            <div className="circle">
                <img src={list} id="emplistpic" alt="list"/>
            </div>
            <p className="para-left">Employee List</p>
        </div>
      </div>
      <div>
        <h1 style={{marginTop:65}}id="employeelist_heading">Employee Details
        <button type="button" id="status" style={
          {color:"black",
          marginLeft:1200,
          position:"absolute",
          top:120}} 
          onClick={() => navigate(`/update/${id}`)
              }>Edit</button></h1>
       
      </div>
      <div id="formsession" style={{height:230,width:1200, marginTop:20}}>
          
      {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
                <div>
                  <div className="enadd">
                  <label>Employee Name</label><br/>
                  <label>{data.data.name}</label><br/><br/>
                  <hr style={{width:1100,opacity:1,borderWidth:-1,color:"gray",backgroundColor:"gray",marginTop:0}}></hr>
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

                </div>
             
            ) : null}
      </div>
    </>
  ); 

}
export default EmployeeDetails;


