import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';
export const HotelItems = ({ name, location, price, contact, img_url }) => {
  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      opacity: 0.6,
      inDuration: 255
    });
  }, []);
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
              <input type='text' id='checkIn' />
              <label for='checkIn'>Checkin</label>
            </div>
            <div class='input-field'>
              <input type='text' id='checkOut' />
              <label for='checkOut'>Checkout</label>
            </div>
          </form>
        </div>
        <div class='modal-footer'>
          <a href='#!' class='modal-action modal-close btn teal'>
            <i class='fa fa-lock'></i>submit
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default HotelItems;
