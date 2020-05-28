import React, { Fragment } from 'react';

export const Hotels = ({ match }) => {
  // var location=match.params.l
  return (
    <Fragment>
      <h1 class='teal-text hh'>Hotels:</h1>
      <section class='section section-hotels teal lighten-2 dark-text center scrollspy'>
        <div class='container'>
          <div class='row'>
            <div class='col s12 m4'>
              <div class='card-panel teal'>
                <img
                  class='materialboxed responsive-img'
                  src={'https://source.unsplash.com/1600x900/?hotels'}
                  alt=''
                />
              </div>

              <h5>Hotel-Name</h5>
            </div>
            <div class='col s12 m3 offset-m3'>
              <div class='card-panel teal'>
                <span class='white-text'>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively. I am similar to what is called a panel in
                  other frameworks.
                </span>
              </div>
              {/* <i class='fas fa-star-half-o'></i> */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    //  {/* <h1>You selected {match.params.location}</h1> */}
  );
};
export default Hotels;
