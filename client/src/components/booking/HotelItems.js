import React, { Fragment, useState, useEffect,useContext } from 'react';
import M from 'materialize-css';
import AuthContext from '../../context/auth/authContext';
import axios from 'axios'
export const HotelItems = ({ name, location, price, contact, img_url }) => {
  
  const authContext = useContext(AuthContext);
  const { email } = authContext;
  const [inDate, setIn] = useState('');
  const [outDate, setOut] = useState('');

  const handleDate=(e)=>{
    if(e.target.name==='checkin'){
      setIn(e.target.value)
    }
    if(e.target.name==='checkout'){
     setOut(e.target.value)
   }
}

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      opacity: 0.6,
      inDuration: 255
    });
  }, []);
  const booking=()=>{
    const bookingdata = {
      email:email,
    hotel: name,
    location:location,
    checkIn:inDate,
    checkOut:outDate,
    Amount:price
    };
    const token=localStorage.getItem('token')
    console.log(token)
    axios
    .post('http://localhost:5000/book', bookingdata,{
      headers:{
        "x-auth-token":token
      }
    })
    .then((response) => {
      console.log(response);
    });
  }
  return (
    <Fragment>
      <div class='col s12 m4'>
        <div class='card'>
          <div class='card-image'>
            <img src={'http://localhost:5000/' + img_url} alt='' />
          </div>
          <div class='card-content'>
            <span class='card-title black-text'>{name}</span>
            <p class='teal-text'>
              <span class='black-text'>Address:</span> {location}
            </p>
            <p class='teal-text'>
              <span class='black-text'>Price:</span>
              {price}
            </p>
            <p class='teal-text'>
              <span class='black-text'>Contact No.:</span>
              {contact}
            </p>     
          </div>
          <a href='#checkIn-modal' class='btn teal bookbtn modal-trigger'>
            Book
          </a>
        </div>
      </div>

      <div id='checkIn-modal' class='modal'>
        <div class='modal-content'>
          <h4>Please Fill it</h4>
          <p>Enter Checkin and Checkout</p>
          <form>
            <div class='input-field'>
              <input type='text' id='checkIn' name='checkin' onChange={handleDate} />
              <label for='checkIn'>Checkin</label>
            </div>
            <div class='input-field'>
              <input type='text' id='checkOut' name='checkout' onChange={handleDate} />
              <label for='checkOut'>Checkout</label>
            </div>
          </form>
        </div>
        <div class='modal-footer'>
          <button type="button" class='modal-action modal-close btn teal' onClick={booking} >
           Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default HotelItems;
