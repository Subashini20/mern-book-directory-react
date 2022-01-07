import React, { Component } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export default class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password:'',
            role:'',
        }
       
    }
    
    
    render() {
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            if(this.state.role==="user")
            {
            try{
                
                var response = await axios.post('http://book-backend-project.herokuapp.com/register/login', {
                    password: this.state.password,
                    email: this.state.email
                })
                if(response.data) {
                    await localStorage.setItem('token',response.data);
                    this.props.history.push('/book');
                }
            } catch(err) {
                console.warn(err)
            }
         }
         if(this.state.role==="admin")
            {
            try{
                
                var response = await axios.post('https://mern-book-directory-node.herokuapp.com/register/Adminlogin', {
                    password: this.state.password,
                    email: this.state.email
                })
                if(response.data) {
                    await localStorage.setItem('token',response.data);
                    this.props.history.push('/bookAdmin');
                }
            } catch(err) {
                console.warn(err)
            }
         }
        }
        return (
            <>
            <div className='signin'>
            <div className='App'>
              <h3 style={{ padding: "10px", textAlign: "center",color: 'white', textShadow: ' 2px 2px #000000'  }}><b>Fabulous Opportunity to enhance your Knowledge!! E-books library-free books online😀 </b></h3>
              <pre><center><marquee behavior="scroll" direction="right"><b style={{fontSize:"20px",color:"white"}}><i>😍Happy learning! Have a great day😍</i></b></marquee></center></pre> </div>
         
            <div className="App" style={{padding:"2%"}}>
                <div className="auth-wrapper">
                    <div className="auth-inner">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label><br></br>
                    <input type="email" className="form-control" placeholder="Enter email" required value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}/><br></br>
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input type="password" className="form-control" placeholder="Enter password" required value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})}/><br></br>
                </div>
                <div className="form-group">
                                <label>Accessed By</label><br></br>
                                <input type="text" className="form-control" placeholder="Exple:admin or user" required value={this.state.role} onChange={(e)=> this.setState({role: e.target.value})} />
                            </div><br></br>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />&nbsp;
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label><br></br>
                    </div>
                </div><br></br>

                <button type="submit" className="btn btn-primary btn-block">Submit</button><br></br>
                <p className="forgot-password text-right">
                    {/* Forgot <a href="#">password?</a> */}
                </p>
                <p>
                    Not a registered user?
                    <Button onClick={()=>this.props.history.push("/sign-up")}>Signup</Button>
                </p>
            </form>
            </div>
            </div>
            </div>
         </div>
          <footer>
              <marquee behavior="scroll" direction="left"><p style={{fontSize:"20px",color:"red"}}>Content Disclaimer:Books were written by concerned authors,orginal credits goes to the respective authors</p></marquee>
              <div className="foot">
                  <span style={{float:"left"}}>For Queries:ebookslibrary20@gmail.com</span>
                  <span style={{float:"right"}}>All rights reserved 2022</span>
              </div>
           </footer>
        </>
        );
    }
}
