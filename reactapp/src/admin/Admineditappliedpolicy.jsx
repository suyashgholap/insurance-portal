import React from 'react'
import Navbar from '../Navbar'

export default function Admineditappliedpolicy() {
  return (
      <div>
        <Navbar title1="Add Policy" title2="Policy Details" title3="Applicant details" id1="userViewPolicy" id2="profile" id3="userMyPolicy" l1="/Adminaddpolicy" l2="/Adminappliedpolicy" l3="/Adminviewapplicants" />
        <div className="my-0" style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editpolicyName"></textarea>
                <label htmlFor="editpolicyName">Enter Policy name</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editApplicableAge"></textarea>
                <label htmlFor="editApplicableAge">Enter applicable age </label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editClaimAmount"></textarea>
                <label htmlFor="editClaimAmount">Enter claim amount</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editNoOfYearsPlan"></textarea>
                <label htmlFor="editNoOfYearsPlan">Enter no of years plan</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editRateOfInterest"></textarea>
                <label htmlFor="editRateOfInterest">Rate of interest</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="editPolicyDetails"></textarea>
               <label htmlFor="editPolicyDetails">Enter policy details</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="editTermsAndConditions"></textarea>
               <label htmlFor="editTermsAndConditions">Enter terms and conditions</label>
            </div>
            <div style={{paddingLeft:'350px',fontSize:25,paddingBottom:'50px'}}>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{color:'white',backgroundColor:'#42618f'}} id="updatePolicyButton" >Update policy</button>
            </div>
        </div>
       </div>
  )
}
