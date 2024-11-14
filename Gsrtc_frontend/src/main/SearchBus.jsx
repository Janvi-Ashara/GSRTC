import React,{useEffect, useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Axios from "axios";

export default function SearchBus() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data,setData] =useState()

const getData=async()=>{
  const response=await Axios.get("http://localhost:5000/getData");
  setData(response.data);
}
useEffect(()=>{
  getData()
},[])
  return (
    <>
    <center>
    <div style={{ border: '2px solid black', height: '700px', width: '560px' }}>
      <h1>Routes</h1>
      <h2 style={{color:'green'}}>{data}</h2>
      <hr style={{borderBottom:'1px solid black'}}/>
      <div>
      <input type="text" name="name" placeholder="Choose Starting Point" style={{backgroundColor:'#F0F0F0', height:'60px',width:'500px',fontSize:'30px'}}require />
      <br/>
      <hr/>
      <input type="text" name="name" placeholder="Choose Destination Point" style={{backgroundColor:'#F0F0F0', height:'60px',width:'500px',fontSize:'30px'}}require />
      <br/>
      <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
      <select style={{ backgroundColor:'#F0F0F0', height:'60px',fontSize:'30px',width:'230px',marginTop:'15px'}}>
        <option >All</option>
        <option >Gurjar Nagari</option>
        <option >Express</option>
        <option >Volvo</option>
        <option>Mini Bus</option>
      </select>
      </div>
      <div>
      <select style={{ backgroundColor:'#F0F0F0', height:'60px',width:'253px',fontSize:'30px',marginTop:'15px'}}>
        <option>01:00 AM </option>
        <option >02:00 AM </option>
        <option >03:00 AM </option>
        <option >04:00 AM </option>
        <option>05:00 AM </option>
      </select>
      </div>
      </div>
      <br/>
      {/* //<h2>Select a Date</h2> */}
      <input type="date" name="name" style={{backgroundColor:'#F0F0F0', height:'60px',width:'500px',fontSize:'30px'}}require />

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Click to select a date"
        showPopperArrow={false} // Optional: Hide arrow
      />
      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
      <br/>
      <button type='submit' style={{ backgroundColor:'#ff1a1a',color:'white', height:'60px',width:'510px',fontSize:'30px',marginTop:'15px',border:'none'}}>Search Bus</button>
      </div>
      </div> 
      </center>
  
   
    
    </>
  )
}
