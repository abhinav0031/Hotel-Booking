import React,{ Fragment, useState, useContext, useEffect } from 'react';
import axios from 'axios';


const Booking = () =>  {
  
  const [hotel, sethotel] = useState('');
  const [address, setaddress] = useState('');
  const [location, setlocation] = useState('');
  const [price, setprice] = useState('');
  const [contact, setcontact] = useState('');
  const [rooms, setrooms] = useState('');
  //const [file, setfile] = useState(null);
  const handleChange = (e) => {
    if (e.target.name === 'hotel') {
      sethotel(e.target.value);
    }
    if (e.target.name === 'address') {
      setaddress(e.target.value);
    }
    if (e.target.name === 'location') {
      setlocation(e.target.value);
    }
    if (e.target.name === 'price') {
      setprice(e.target.value);
    }
    if (e.target.name === 'contact') {
      setcontact(e.target.value);
    }
    if (e.target.name === 'rooms') {
      setrooms(e.target.value);
    }
  };
  const handlefile = (e) => {
    const file=e.target.files[0];
   

     //console.log(file);
  };
  const submit = () => {
   // console.log(this .state)
    const hoteldata = {
      hotel: hotel,
      address: address,
      location: location,
      price: price,
      contact: contact,
      rooms: rooms, 
    };
   console.log(hoteldata);
    axios.post('http://localhost:5000/hotel', hoteldata)
       .then((response) => {
     console.log(response);
     });
  };

  
    return (
      <Fragment>
        <section class='hr-body'>
          <div>
            <div class='main'>
              <header>Register your Hotel</header>
              <form class='form-box'>
                <label htmlfor='HotelName'>Name of Hotel</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='hotel'
                    className='inp'
                    placeholder='Name of Hotel'
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Address'>Address</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='address'
                    className='inp'
                    placeholder='Complete Address of Hotel'
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Location'>Location</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='location'
                    className='inp'
                    placeholder='Location'
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Price'>Price</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='price'
                    className='inp'
                    placeholder='Price'
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Contact'>Contact</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='contact'
                    className='inp'
                    placeholder='Contact No.'
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Rooms'>Rooms</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='rooms'
                    className='inp'
                    placeholder='No. of Rooms available'
                    onChange={handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Image'>Upload Images</label>
                <div class='inp-row'>
                  <input
                    type='file'
                    alt='image'
                    name='file'
                    className='inp'
                    placeholder='Uplaod Images '
                    onChange={handlefile}
                    required
                  ></input>
                </div>

                <input
                  type='button'
                  class='sub-btn'
                  value='Register'
                  onClick={submit}
                ></input>
              </form>
            </div>
          </div>
        </section>

        <footer class='section teal darken-2 white-text center'>
          <p class='flow-text'>HotelBooker &copy; 2020</p>
        </footer>
      </Fragment>
    );
  }

export default Booking;
