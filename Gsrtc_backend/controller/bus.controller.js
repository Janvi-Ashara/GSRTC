const bus =require("./../model/Busmodel")

exports.index=async(req,res)=>{
    try{
        console.log(req.query.bus_number);
        const buses=await bus.find({"bus_no":req.query.bus_number});
        res.status(201).json(buses);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.store=async(req,res)=>{
    try{
        console.log(req.body);
        const buses = await bus.create(req.body);
        res.status(201).json(buses)    
    }
        catch(error){
            res.status(500).json({error:error.message})
    }
}