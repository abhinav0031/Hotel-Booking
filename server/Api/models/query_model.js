const mongoose=require('mongoose');
const querySchema=mongoose.Schema({
   
    Name: {type:String,required:true},
    phone: {type:String,required:true,min:10,max:10},
    email:{type:String,
        required:true,
       match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    message: {type:String,required:true}

});


module.exports=mongoose.model('Query',querySchema);