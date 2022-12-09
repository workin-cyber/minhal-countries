import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
        console.log(res.data);
      })
  }


  useEffect(getCountries,[])

  return (
    <div className="App">
      <Header countries={countries} setCountries={setCountries}/>
      <Main countries={countries}/>
    </div>
  );
}
// useEffect(()=>{} , ) - each time render component
// useEffect(()=>{} , [])- first time render component
// useEffect(()=>{} , [state])- each time state change - render 

export default App;
