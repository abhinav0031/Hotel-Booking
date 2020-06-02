import React, { Fragment } from 'react';

export const HotelItems = ({ name, location, price }) => {
  return (
    <Fragment>
      <div class='col s12 m4'>
        <div class='card'>
          <div class='card-image'>
            <img src={'https://source.unsplash.com/1600x900/?Hotels'} alt='' />
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
              {price}
            </p>
          </div>
          <button class='btn teal bookbtn'>Book</button>
        </div>
      </div>
    </Fragment>
  );
};
export default HotelItems;
