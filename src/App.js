import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const[darkMode, setDarkMode]=useState(false); 
  return (
    //"<></>" JSX fragments used to input html tags and props is "properties"
    <> 
    <Navbar title="TextUtils" aboutText="About" />
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyse below"/>
    <About/> 
    </div>
    </>
  );
}

export default App;
