import React, { Fragment } from 'react';

export const HotelItems = ({ name, location }) => {
  return (
    <Fragment>
      <div class='col s12 m4'>
        <div class='card'>
          <div class='card-image'>
            <img src={'https://source.unsplash.com/1600x900/?Hotels'} alt='' />
            <span class='card-title'>{name}</span>
          </div>
          <div class='card-content'>
            <p>
              {location}
              The fun, sunshine and the smallest state of India doesn’t need any
              introduction.
            </p>
          </div>
          <button class='btn teal bookbtn'>Book</button>
        </div>
      </div>
    </Fragment>
  );
};
export default HotelItems;
