import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from '../src/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeList from './EmployeeList';
import { store } from './app/store'
import { Provider } from 'react-redux'
import CreateEmployee from './CreateEmployee';
import EmployeeDetails from './EmployeeDetails';
import UpdateEmployee from './UpdateEmployee';
//import { Counter } from './features/counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Login/>}/>
      <Route path="/list" element={<EmployeeList/>}/>
      <Route path="/details/:id" element={<EmployeeDetails/>}/>
      <Route path="/update/:id"  element={<UpdateEmployee/>}/>
      <Route path="/create" element={<CreateEmployee/>}/>
    </Routes>
    </BrowserRouter>  
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
