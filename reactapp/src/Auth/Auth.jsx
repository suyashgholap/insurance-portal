import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers'
import React from 'react'

export default function Auth() {
  return (
    <div className="container my-5">
        <div style={{color:'white',backgroundColor:'#42618f',textAlign:'center',border:'2px solid black',fontSize:25}}>
            <bold>Register</bold> 
        </div >
        <div className="my-0" style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="admin/user"></textarea>
                <label for="admin/user">Enter admin/user</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="email"></textarea>
                <label for="email">Enter email</label>
            </div>
        </div>
    </div>
  )
}
