import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Fragment>
      <section class='slider'>
        <ul class='slides'>
          <li>
            <img
              class='responsive-img'
              src={require('./img/resort1.jpg')}
              alt=''
            />
            <div class='caption center-align'>
              <h2>Take Your Dream Vacation</h2>
              <h5 class='light grey-text text-lighten-3 hide-on-small-only'>
              Discover a hotel that defines a new dimension of luxury.Come in as Guests, Leave as Family.
              </h5>
              <a href='#' class='btn btn-large'>
                Learn More
              </a>
            </div>
          </li>
          <li>
            <img
              class='responsive-img'
              src={require('./img/resort2.jpg')}
              alt=''
            />
            <div class='caption left-align'>
              <h2>We Work With All Budgets</h2>
              <h5 class='light grey-text text-lighten-3 hide-on-small-only'>
                We have tried our best to arrange the cheapest options avialable in the market. 
                we work with no intensions of making profit.
              </h5>
              <a href='#' class='btn btn-large'>
                Learn More
              </a>
            </div>
          </li>
          <li>
            <img
              class='responsive-img'
              src={require('./img/resort3.jpg')}
              alt=''
            />
            <div class='caption right-align'>
              <h2>Plan Group Or Individual Vacations</h2>
              <h5 class='light grey-text text-lighten-3 hide-on-small-only'>
                 Plan one the most lucrative amazing experience with us and make it a beutiful memory of your life.
              </h5>
              <a href='#' class='btn btn-large'>
                Learn More
              </a>
            </div>
          </li>
        </ul>
      </section>
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
                  placeholder='Taj, The oberoi, etc...'
                  type='text'
                  id='autocomplete-input'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section section-icons grey lighten-4 center'>
        <div class='container'>
          <div class='row'>
            <div class='col s12 m4'>
              <div class='card-panel'>
                <i class='fa fa-map-marker fa-6x aria-hidden="true"'></i>
                <h4>Pick Where</h4>
                <p>
                The art of meeting your highest expectations.
                </p>
              </div>
            </div>
            <div class='col s12 m4'>
              <div class='card-panel'>
                <i class='fa fa-store fa-6x'></i>
                <h4>Travel Shop</h4>
                <p>
                It’s said they never forget, neither will you
                </p>
              </div>
            </div>
            <div class='col s12 m4'>
              <div class='card-panel'>
                <i class='fa fa-hotel fa-6x '></i>
                <h4>Book Cheap</h4>
                <p>
                Twice the comfort, twice the value, twice the Hotel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='popular' class='section section-popular scrollspy'>
        <div class='container'>
          <div class='row'>
            <h4 class='center'>
              <span class='teal-text'>Popular</span> Places
            </h4>
            <div class='col s12 m4'>
              <div class='card'>
                <div class='card-image'>
                  <img src={require('./img/resort1.jpg')} alt='' />
                  <span class='card-title'>Goa</span>
                </div>
                <div class='card-content'>
                  <p>
                  The fun, sunshine and the smallest state of India doesn’t need any introduction.
                  </p>
                </div>
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
                    You can take daydreamer out of mumbai but you can not take mumbai out of a daydreamer.
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
                   Manali is adventure capital of India, a place that offers you peace,thrill and adventure at same place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col s12 center'>
              <Link to='/booking' class='btn btn-large grey darken-3'>
                <i class='material-icons left'>send</i> Contact For Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class='section section-follow teal darken-2 white-text center'>
        <div class='container'>
          <div class='row'>
            <div class='col s12'>
              <h4>Follow Hotel-Booker</h4>
              <p>Follow us on social media for special offers</p>
              <a href='www.facebook.com' target='_blank' class='white-text'>
                <i class='fab fa-facebook fa-4x'></i>
              </a>
              <a href='www.twitter.com' target='_blank' class='white-text'>
                <i class='fab fa-twitter fa-4x'></i>
              </a>
              <a href='www.linkedin.com' target='_blank' class='white-text'>
                <i class='fab fa-linkedin fa-4x'></i>
              </a>
              <a href='www.googleplus.com' target='_blank' class='white-text'>
                <i class='fab fa-google-plus fa-4x'></i>
              </a>
              <a href='www.pinterest.com' target='_blank' class='white-text'>
                <i class='fab fa-pinterest fa-4x'></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='gallery' class='section section-gallery scrollspy'>
        <div class='container'>
          <h4 class='center'>
            <span class='teal-text'>Photo </span> Gallery
          </h4>
          <div class='row'>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?beach'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?travel'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?nature'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?beach, travel'}
                alt=''
              />
            </div>
          </div>

          <div class='row'>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?beaches'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?traveling'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?bridge'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?boat, travel'}
                alt=''
              />
            </div>
          </div>

          <div class='row'>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?water'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?building'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?trees'}
                alt=''
              />
            </div>
            <div class='col s12 m3'>
              <img
                class='materialboxed responsive-img'
                src={'https://source.unsplash.com/1600x900/?cruise'}
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      <section id='contact' class='section section-contact scrollspy'>
        <div class='container'>
          <div class='row'>
            <div class='col s12 m6'>
              <div class='card-panel teal white-text center'>
                <i class='material-icons medium'>email</i>
                <h5>Contact Us For Issues</h5>
                <p>
                  We stand with you for your any query. you can also give your suggestions to us for improvement, we have a open thought process for uni-intentional goal of providing best experience.
                </p>
              </div>
              <ul class='collection with-header'>
                <li class='collection-header'>
                  <h4>Location</h4>
                </li>
                <li class='collection-item'>Hotel-Booker</li>
                <li class='collection-item'>sector 24,Chandigarh</li>
                <li class='collection-item'>street No.31</li>
              </ul>
            </div>
            <div class='col s12 m6'>
              <div class='card-panel grey lighten-3'>
                <h5>Have any questions ask here!!</h5>
                <div class='input-field'>
                  <input type='text' placeholder='Name' id='name' />
                  <label for='name'>Name</label>
                </div>
                <div class='input-field'>
                  <input type='email' placeholder='Email' id='email' />
                  <label for='email'>Email</label>
                </div>
                <div class='input-field'>
                  <input type='text' placeholder='Phone' id='phone' />
                  <label for='phone'>Phone</label>
                </div>
                <div class='input-field'>
                  <textarea
                    class='materialize-textarea'
                    placeholder='Question/problem'
                    id='message'
                  ></textarea>
                  <label for='message'>Message</label>
                </div>
                <input type='submit' value='Submit' class='btn' />
              </div>
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
export default Home;
