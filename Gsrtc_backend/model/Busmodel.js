// import mongoose from "mongoose";
const mongoose = require("mongoose")
const BusSchema=new mongoose.Schema({
    "bus_number":{
            type:'string',
            require:true,
    },
      "departure_time": {
            type:'string',
            require:true,
      },
      "arrival_time":{
            type:'string',
            require:true,
      },
      "duration": {
            type:'string',
            require:true,
      },
      "available_seats": {
            type:'number',
            require:true,
      },
});
const bus=mongoose.model("buses",BusSchema)
module.exports=bus


//       "bus_number": "GSRTC123",
//       "departure_time": "06:00",
//       "arrival_time": "09:00",
//       "duration": "3h",
//       "available_seats": 30,
//       "fare": 150
