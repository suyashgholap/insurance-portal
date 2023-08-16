import React from 'react'
import Navbar from '../Navbar'
import Card1 from '../Card1'
export default function Adminappliedpolicy() {
  return (
    <div>
        <Navbar title1="Add Policy" title2="Policy Details" title3="Applicant details" id1="userViewPolicy" id2="profile" id3="userMyPolicy" l1="/Adminaddpolicy" l2="/Adminappliedpolicy" l3="/Adminviewapplicants"/>
        <div style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="policyName"></textarea>
                <label htmlFor="policyName">Enter Policy id to seach</label>
            </div>
            <div style={{paddingLeft:'430px',fontSize:25}}>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{color:'white',backgroundColor:'#42618f'}} id="searchById" >Search</button>
            </div> 
            <div style={{paddingBottom:'300px'}}>
                <Card1 paddingl='10px' c1='inline' id1='gridApplicants' l5="/Admineditapplicants"/>
            </div>
           
            
        </div>
    </div>
    )
}