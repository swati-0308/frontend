import logo from './logo.svg';
import './App.css';
import InputField from './components/inputField';
import Button from './components/Button';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [username,setusername]= useState('');
  const [displayname,setdisplayname]= useState('');
  const onclick=()=>{
    const val=prompt('Enter your name')
    console.log(val)
  }

  useEffect(()=>{
    setdisplayname('Swati')
  },[]);

  useEffect(()=>{
    if(username){
      setdisplayname(username);
    }
  },[username])

  const onChange= (value)=>{
    setusername(value)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <InputField label ="Username" onChange={onChange}/>
        {/* <InputField label ="Password"/>
        <Button label='Login' handleClick={()=> {
        }}/> */}
        {displayname && <h1>Hello {displayname}</h1>}
    </div>
  );
}

export default App;
