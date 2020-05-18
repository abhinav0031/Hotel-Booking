import React, { Component } from 'react'
import axios from "axios"
export default class Register extends Component {
  constructor() {
    super();
    this.state = { 
                  uname:null,
                  email:null,
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
      name:this.state.uname,
      email:this.state.email,
      password:this.state.password
    }
   
    axios.post('http://localhost:5000/user/register',logindata)
    .then(response=>{
      alert(response.data.message);
    })
  }
  render() {
    return (
       <div>
         <input type="text"  placeholder="Username" name="uname" onChange={this.handleChange}/>
         <input type="text"  placeholder="email" name="email" onChange={this.handleChange}/>
         <input type="password" placeholder="password"  name="password" onChange={this.handleChange}/>
         <button onClick={this.submit}  >submit </button>
       </div>
    )
  }
}
