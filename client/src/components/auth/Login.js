import React, { Component } from 'react'
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = { email:null,
                  password:null
                };
 
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  submit=()=>{
    const logindata={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:5000/user/login',logindata)
    .then(response=>{
      localStorage.setItem("token",response.data.token)
    })
  }
  render() {
    return (
       <div>
         <input type="text"  placeholder="email" name="email" onChange={this.handleChange}/>
         <input type="password" placeholder="password"  name="password" onChange={this.handleChange}/>
         <button onClick={this.submit}  >submit </button>
       </div>
    )
  }
}
