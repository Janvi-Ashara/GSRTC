import React from 'react'

export default function Timetable() {
  return (
    <>
    <center>
    <div style={{ border: '2px solid black', height: '700px', width: '560px' }}>
      <h1>Schedule</h1>
      <hr style={{borderBottom:'1px solid black'}}/>
      <div>
      <input type="text" name="name" placeholder="Choose Starting Point" style={{backgroundColor:'#F0F0F0', height:'60px',width:'500px',fontSize:'30px'}}require />
      <br/>
      <hr/>
      <input type="text" name="name" placeholder="Choose Destination Point" style={{backgroundColor:'#F0F0F0', height:'60px',width:'500px',fontSize:'30px'}}require />
      <br/>
      <select style={{ backgroundColor:'#F0F0F0', height:'60px',width:'510px',fontSize:'30px',marginTop:'15px'}}>
        <option >All</option>
        <option >Gurjar Nagari</option>
        <option >Express</option>
        <option >Volvo</option>
        <option>Mini Bus</option>
      </select>
      <br/>
      <button type='submit' style={{ backgroundColor:'#ff1a1a',color:'white', height:'60px',width:'510px',fontSize:'30px',marginTop:'15px',border:'none'}}>Search Bus</button>
      </div>
      </div> 
      </center>
  

    </>
  )
}
