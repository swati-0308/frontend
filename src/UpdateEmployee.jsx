import "../src/styles/style.css";
import React, { useState ,useEffect} from "react";
import { useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation } from "./services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const [updateEmployeeById, result] = useUpdateEmployeeByIdMutation();
  let {id} =useParams();
  const {data,error,isLoading} =useGetEmployeeByIdQuery(id)
  const navigate=useNavigate();
  
  const [formvalues, setValues] = useState({
    id:"",
    name: "",
    password: "",
    role: "",
    jdate: "",
    email: "",
    status: "",
    experience: "",
    departmentId: "",
    address: "",
  })

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  useEffect(() => {
    if(data){
        setValues({
        id:data.data.id,
        name:data.data.name,
        password:data.data.password,
        role:data.data.role,
        jdate:data.data.jdate,
        email:data.data.email, 
        status:data.data.status,
        experience:data.data.experience,
        departmentId:data.data.departmentId,
        address:data.data.address.address,
});
        
    }
}, [data]);

  function submitfn() {
    console.log(formvalues)
    updateEmployeeById({id,formvalues});
    navigate("/list");
  }
  return (
    <>
      <div className="sidenav">
        <div>
          <img src="./assets/logo.png" alt="keyvalue" />
        </div>
        <div class="left">
            <div class="circle">
                <img src="./assets/List.png" id="emplistpic" alt="list"/>
            </div>
            <p class="para-left">Employee List</p>
        </div>
      </div>
      <div>
        <h1 id="employeelist_heading">Update Employee</h1>
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
                  defaultValue={formvalues.name}
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
                  defaultValue={formvalues.role}
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
                  defaultValue={formvalues.address}
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
                  defaultValue={formvalues.departmentId}
                  onChange={set("departmentId")}
                />
              </div>

              <div>
                <label id="Sidlabel">Status</label>

                <select
                  name="Sname"
                  id="Sid"
                  value={formvalues.status}
                  defaultValue={formvalues.status}
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
                  defaultValue={formvalues.jdate}
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
                  defaultValue={formvalues.experience}
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
                  defaultValue={formvalues.email}
                  onChange={set("email")}
                />
                </div>
                <div>
                <label id="pwd">Password</label>
                <input
                  type="text"
                  id="pd"
                  name="pwd"
                  placeholder="Password"
                  value={formvalues.password}
                  defaultValue={formvalues.password}
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
              Update
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

export default UpdateEmployee;
