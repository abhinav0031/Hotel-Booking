import React, { Fragment } from 'react';

export const Hotels = ({ match }) => {
  // var location=match.params.l
  return (
    <Fragment>
      <div className='container'>
        <h1 class='teal-text'> Hotels:</h1>
        <div class='row'>
          <div class='col s12 m4'>
            <div class='card'>
              <div class='card-image'>
                <img
                  src={'https://source.unsplash.com/1600x900/?Hotels'}
                  alt=''
                />
                <span class='card-title'>Goa</span>
              </div>
              <div class='card-content'>
                <p>
                  The fun, sunshine and the smallest state of India doesn’t need
                  any introduction.
                </p>
              </div>
              <button class='btn teal bookbtn'>Book</button>
            </div>
          </div>
          <div class='col s12 m4'>
            <div class='card'>
              <div class='card-image'>
                <img src={require('./img/resort2.jpg')} alt='' />
                <span class='card-title'>Mumbai</span>
              </div>
              <div class='card-content'>
                <p>
                  You can take daydreamer out of mumbai but you can not take
                  mumbai out of a daydreamer.
                </p>
              </div>
            </div>
          </div>
          <div class='col s12 m4'>
            <div class='card'>
              <div class='card-image'>
                <img src={require('./img/resort3.jpg')} alt='' />
                <span class='card-title'>Manali</span>
              </div>
              <div class='card-content'>
                <p>
                  Manali is adventure capital of India, a place that offers you
                  peace,thrill and adventure at same place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    //  {/* <h1>You selected {match.params.location}</h1> */}
  );
};
export default Hotels;
