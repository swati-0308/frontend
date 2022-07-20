import "../src/styles/style.css";
import React, { useState } from "react";
import { useCreateEmployeeMutation } from "./services/EmployeeService";
import { useNavigate } from "react-router-dom";



const CreateEmployee = () => {
  const [createEmployee, result] = useCreateEmployeeMutation();
  const navigate=useNavigate();
  const [formvalues, setValues] = useState({
    name: "",
    password: "",
    role: "",
    jdate: "",
    email: "",
    status: "",
    experience: "",
    departmentId: "",
    address: "",
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  function submitfn() {
    createEmployee(formvalues);
    navigate("/list");
  }
  return (
    <>
      <div className="sidenav">
        <div>
          <img src="./assets/logo.png" alt="keyvalue" />
        </div>
        <div className="left">
            <div className="circle">
                <img src="./assets/List.png" id="emplistpic" alt="list"/>
            </div>
            <p className="para-left">Employee List</p>
        </div>
        
      </div>
      <div>
        <h1 id="employeelist_heading">Create Employee</h1>
      </div>
      <div>
        <form name="Employeeform">
          <div id="formsession">
            <div>
              <div>
                <label id="enlabel">Employee Name</label>
                <input
                  type="text"
                  id="en"
                  name="ename"
                  placeholder="Employee name"
                  value={formvalues.name}
                  onChange={set("name")}
                />
              </div>
              <div>
                <label id="Ridlabel">Role</label>

                <select
                  name="Rname"
                  id="Rid"
                  value={formvalues.role}
                  onChange={set("role")}
                >
                  <option value="QA">QA Engineer</option>
                  <option value="Developer">Developer</option>
                  <option value="UI/UX Engineer">UI/UX Engineer</option>
                </select>
              </div>
              <div>
                <label id="addidlabel">Address</label>
                <input
                  type="text"
                  id="addid"
                  name="Add"
                  placeholder="Addresss"
                  value={formvalues.address}
                  onChange={set("address")}
                />
              </div>
            </div>

            <div>
              <div>
                <label id="eidlabel">Department ID</label>
                <input
                  type="text"
                  id="did"
                  name="emid"
                  placeholder="Department ID"
                  value={formvalues.departmentId}
                  onChange={set("departmentId")}
                />
              </div>

              <div>
                <label id="Sidlabel">Status</label>

                <select
                  name="Sname"
                  id="Sid"
                  value={formvalues.status}
                  onChange={set("status")}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Probation">Probation</option>
                </select>
              </div>

              <div>
                <label id="pidlabel">Upload ID Proof</label>
                <input
                  type="file"
                  id="pid"
                  name="pname"
                  placeholder="Choose file "
                />
              </div>
            </div>
            <div>
              <div>
                <label id="jdlabel">Joining Date</label>
                <input
                  type="text"
                  id="jd"
                  name="Jdate"
                  placeholder="Joining Date"
                  value={formvalues.jdate}
                  onChange={set("jdate")}
                />
              </div>
              <div>
                <label id="Eidlabel">Experience</label>
                <input
                  type="text"
                  id="Eid"
                  name="Exp"
                  placeholder="Experience"
                  value={formvalues.experience}
                  onChange={set("experience")}
                />
              </div>

              <div>
                <label id="emailidlabel">Email</label>
                <input
                  type="text"
                  id="emailid"
                  name="ename"
                  placeholder="Enter email"
                  value={formvalues.email}
                  onChange={set("email")}
                />
                </div>
                <div>
                <label id="pwd">Password</label>
                <input
                  type="password"
                  id="pd"
                  name="pwd"
                  placeholder="Password"
                  value={formvalues.password}
                  onChange={set("password")}
                />
              </div>
              </div>
              <div id="buttonsession">
            <button id="createbutton"
              type="button"
              onClick={() => {
                submitfn();
               
              }}
            >
              Create
            </button>
          </div>
            <div id="buttonsession">
          <button type="button" id="cancelbutton" onClick={() => {}}>
            Cancel
          </button>
          </div>
            </div>
         
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;
