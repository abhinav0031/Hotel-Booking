import React from 'react';
import axios from 'axios';
import { Fragment } from 'react';

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      hotelName: null,
      Address: null,
      Location: null,
      url: null,
      Price: null,
      Contact: null,
      Rooms: null
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    const hoteldata = {
      hotelName: this.state.HotelName,
      Address: this.state.Address,
      Location: this.state.Location,
      Price: this.state.Price,
      Contact: this.state.Contact,
      Rooms: this.state.Rooms,
      url: this.state.Image
    };

    axios.post('http://localhost:5000/hotel', hoteldata);
    // .then((response) => {
    //   alert(response.data.message);
    // });
  };

  render() {
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
                    name='HotelName'
                    className='inp'
                    placeholder='Name of Hotel'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Address'>Address</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='Address'
                    className='inp'
                    placeholder='Complete Address of Hotel'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Location'>Location</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='Location'
                    className='inp'
                    placeholder='Location'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Price'>Price</label>
                <div class='inp-row'>
                  <input
                    type='Number'
                    name='Price'
                    className='inp'
                    placeholder='Price'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Contact'>Contact</label>
                <div class='inp-row'>
                  <input
                    type='Number'
                    name='Contact'
                    className='inp'
                    placeholder='Contact No.'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Rooms'>Rooms</label>
                <div class='inp-row'>
                  <input
                    type='Number'
                    name='Rooms'
                    className='inp'
                    placeholder='No. of Rooms available'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Image'>Upload Images</label>
                <div class='inp-row'>
                  <input
                    type='file'
                    alt='image'
                    name='Image'
                    className='inp'
                    placeholder='Uplaod Images '
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <input
                  type='submit'
                  class='sub-btn'
                  value='Register'
                  onClick={this.submit()}
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
}
export default Booking;
