import React, { Component, Fragment } from 'react';
import axios from 'axios';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      uname: null,
      email: null,
      password: null
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    const logindata = {
      name: this.state.uname,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post('http://localhost:5000/user/register', logindata)
      .then((response) => {
        alert(response.data.message);
      });
  };
  render() {
    return (
      <Fragment>
        <section class='section-signup iris transparent z-depth-5'>
          <div class='container regiss'>
            <div class='row'>
              <div class='col s12 m6'>
                <h4>Make Account for free</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae animi numquam quibusdam delectus corrupti fugiat
                  placeat consequatur accusantium dicta quo.
                </p>
                <h4>Get best deals!!</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae animi numquam quibusdam delectus corrupti fugiat
                  placeat consequatur accusantium dicta quo.
                </p>
                <h4>Make memories with your loved ones</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae animi numquam quibusdam delectus corrupti fugiat
                  placeat consequatur accusantium dicta quo.
                </p>
              </div>
              <div class='col s12 m6'>
                <div class='card-panel  grey lighten-4 grey-text text-darken-4 z-depth-0'>
                  <form>
                    <div class='input-field'>
                      <input
                        type='text'
                        placeholder='Username'
                        name='uname'
                        onChange={this.handleChange}
                      />
                      <label for='f_name'>User Name</label>
                    </div>

                    <div class='input-field'>
                      <input
                        type='text'
                        placeholder='email'
                        name='email'
                        onChange={this.handleChange}
                      />
                      <label for='email'>Email</label>
                    </div>
                    <div class='input-field'>
                      <input
                        type='password'
                        placeholder='password'
                        name='password'
                        onChange={this.handleChange}
                      />
                      <label for='password'>Password</label>
                    </div>
                    <button class='btn teal' onClick={this.submit}>
                      submit{' '}
                    </button>
                    {/* <div class="input-field">
                            <input type="text" id="company">
                            <label for="company">Company</label>
                        </div>
                        <div class="input-field">
                            <select id="role">
                                <option value="select roll" disabled select>select roll</option>
                                <option value="Professional Developer">Professional Developer</option>
                                <option value="Hobbyist">Hobbyist</option>
                                <option value="student">Student</option>
                                <option value="manager">Manager</option>
                            </select>
                            <label for="role">Role</label>
                        </div> 
                        <br>
                        <input type="submit" value="Signup" class="btn btn-large purple btn-extend"> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div>
         <input type="text"  placeholder="Username" name="uname" onChange={this.handleChange}/>
         <input type="text"  placeholder="email" name="email" onChange={this.handleChange}/>
         <input type="password" placeholder="password"  name="password" onChange={this.handleChange}/>
         <button onClick={this.submit}  >submit </button>
       </div> */}
        <footer class='section teal darken-2 white-text center'>
          <p class='flow-text'>HotelBooker &copy; 2020</p>
        </footer>
      </Fragment>
    );
  }
}
