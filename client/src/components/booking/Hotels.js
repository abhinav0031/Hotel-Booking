import React, { Fragment } from 'react';
import HotelItems from './HotelItems';
export const Hotels = ({ match }) => {
  // var location=match.params.l
  const hotels = [
    {
      name: 'taj',
      location: 'asas'
    },
    {
      name: 'sadaaj',
      location: 'sadass'
    }
  ];
  return (
    <Fragment>
      <div className='container'>
        <h1 class='teal-text'> Hotels:</h1>
        <div class='row'>
          {hotels.map((hotel) => (
            <HotelItems name={hotel.name} location={hotel.location} />
          ))}
        </div>
      </div>
    </Fragment>
    //  {/* <h1>You selected {match.params.location}</h1> */}
  );
};
export default Hotels;
