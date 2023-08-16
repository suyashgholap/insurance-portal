import React from 'react'
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div style={{zoom:'110%'}}>
      <div style={{color:'white',backgroundColor:'#42618f',border:'2px solid black',fontSize:25,paddingBottom:'10px'}}> <strong style={{paddingRight:'400px'}}> Life Insurance</strong> Login</div>
      <div className="my-0" style={{paddingLeft:'280px',border:'2px solid black',backgroundColor:'#c6c1cf',paddingBottom:'380px'}}>
            <div className="my-5 mx-5 form-floating mb-5" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="email"></textarea>
                <label htmlFor="email">Enter email</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="password"></textarea>
                <label htmlFor="password">Enter Password</label>
            </div> 
            <div style={{paddingLeft:'270px',fontSize:25,paddingBottom:'50px'}}>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{backgroundColor:'#42618f',textDecoration:'none'}} id="loginButton" ><Link to="/user/Userviewpolicy" style={{textDecoration:'none',color:'white'}}>Login</Link></button>
                <strong className='mx-2' style={{fontSize:20}}>New User/Admin?</strong>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{color:'blue',border:'none',backgroundColor:'#c6c1cf'}} id="signupLink"><Link to="/Signup">Sign Up</Link></button>
            </div> 
             
      </div>
    </div>
  )
}
