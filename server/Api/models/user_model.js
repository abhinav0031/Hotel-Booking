const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    UserName: {type:String,required:true},
    password: {type:String,required:true},
    email:{type:String,
        required:true,
        unique:true,
       match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
});


module.exports=mongoose.model('user',userSchema);