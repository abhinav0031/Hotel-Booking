const mongoose=require('mongoose');
const bookingSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    hotel: String,
    location:String,
    checkIn:String,
    checkOut:String,
    Amount:Number
});


module.exports=mongoose.model('booking',bookingSchema);