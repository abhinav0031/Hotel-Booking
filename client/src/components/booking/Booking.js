import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
export const Booking = () => {
  // const authContext = useContext(AuthContext);
  // const { email } = authContext;
  // console.log(email);
  return (
    <Fragment>
      <section
        id='search'
        class='section section-search teal darken-1 white-text center scrollspy'
      >
        <div class='container'>
          <div class='row'>
            <div class='col s12'>
              <h3>Search Hotels</h3>
              <div class='input-field'>
                <input
                  class='white grey-text autocomplete'
                  placeholder='Location'
                  type='text'
                  id='autocomplete-input'
                />
              </div>
              <button class='btn wave-effect'>Search</button>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-gallery'>
        <div className='container'>
          <h3>
            Our most <span class='teal-text'>Popular Locations:</span>
          </h3>
          <div className='row'>
            <div className='col s12 m6 l6'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?goaBeach'}
                alt=''
              />
              <h5 class='center'>
                <Link to='/booking/goa'>Goa</Link>{' '}
              </h5>
            </div>
            <div className='col s12 m6 l6'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?Amritsar'}
                alt=''
              />
              <h5 class='center'>
                <Link to='/booking/amritsar'>Amritsar</Link>
              </h5>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 m6 l6'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?hawamahal'}
                alt=''
              />
              <h5 class='center'>
                <Link to='/booking/jaipur'>Jaipur</Link>
              </h5>
            </div>
            <div className='col s12 m6 l6'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?MarineDrive'}
                alt=''
              />
              <h5 class='center'>
                <Link to='/booking/mumbai'>Mumbai</Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <footer class='section teal darken-2 white-text center'>
        <p class='flow-text'>HotelBooker &copy; 2020</p>
      </footer>
    </Fragment>
  );
};
export default Booking;
