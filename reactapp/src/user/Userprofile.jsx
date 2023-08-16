import React from 'react'
import Navbar from '../Navbar'
export default function Userprofile() {
    const showAlert = () => {
        alert(" You have successfully applied for an Insurance policy!");
    };
  return (
      <div>
        <Navbar title1="View policy" title2="Profile" title3="My policy" id1="userViewPolicy" id2="profile" id3="userMyPolicy" l1="/Userviewpolicy" l2="/Userprofile" l3="/Userappliedpolicy"/>
        <div className="my-0" style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="enterName"></textarea>
                <label htmlFor="enterName">Enter Applicant Name</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="enterAddress"></textarea>
                <label htmlFor="enterAddress">Enter Applicant Address</label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="enterMobile"></textarea>
                <label htmlFor="enterMobile">Enter Applicant Mobile</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="enterEmail"></textarea>
                <label htmlFor="enterEmail">Enter Applicant Email Id</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="enterAadharNo"></textarea>
                <label htmlFor="enterAadharNo">Enter Applicant Aadhar No</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="enterPanNo"></textarea>
               <label htmlFor="enterPanNo">Enter Applicant age</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="enterId"></textarea>
               <label htmlFor="enterId">Applicants insurance ongoing id</label>
            </div>
            <div style={{paddingLeft:'430px',fontSize:25,paddingBottom:'50px'}}>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{color:'white',backgroundColor:'#42618f'}} onClick={showAlert}>Submit</button>
            </div>
        </div>
       </div>

  )
}
