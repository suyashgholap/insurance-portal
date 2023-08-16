import React from 'react'
import Navbar from '../Navbar'
export default function Adminaddpolicy() {
  return (
      <div>
        <Navbar title1="Add Policy" title2="Policy Details" title3="Applicant details" id1="userViewPolicy" id2="profile" id3="userMyPolicy" l1="/admin/Adminaddpolicy" l2="/admin/Adminappliedpolicy" l3="/admin/Adminviewapplicants"/>
        <div className="my-0" style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="policyName"></textarea>
                <label htmlFor="policyName">Enter Policy Name</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="applicableAge"></textarea>
                <label htmlFor="applicableAge">Enter applicable Age</label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="claimAmount"></textarea>
                <label htmlFor="claimAmount">Enter claim amount</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="noOfYearsPlan"></textarea>
                <label htmlFor="floatingTextarea">Enter no of years plan</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="rateOfInterest"></textarea>
                <label htmlFor="rateOfInterest">Rate of interest</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="enterPolicyDetails"></textarea>
               <label htmlFor="enterPolicyDetails">Enter Policy details</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="enterTermsAndConditions"></textarea>
               <label htmlFor="enterTermsAndConditions">Enter terms and conditions</label>
            </div>
            <div style={{paddingLeft:'350px',fontSize:25,paddingBottom:'50px'}}>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{color:'white',backgroundColor:'#42618f'}} id="addPolicyButton" >Add policy</button>
            </div>   
        </div>
       </div>
  )
}