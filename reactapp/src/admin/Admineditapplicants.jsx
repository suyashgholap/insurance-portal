
import React, { useState } from 'react';
import FileUpload from '../FileUpload'
import Navbar from '../Navbar';

export default function Admineditapplicants() {
    const [editDocumentType, seteditDocumentType] = useState('');
    
    const handleeditDocumentTypeChange = (event) => {
        seteditDocumentType(event.target.value);
      };
  return (
      <div>
         <Navbar title1="Add Policy" title2="Policy Details" title3="Applicant details" id1="userViewPolicy" id2="profile" id3="userMyPolicy" l1="/Adminaddpolicy" l2="/Adminappliedpolicy" l3="/Adminviewapplicants"/>
        <div className="my-0" style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editName"></textarea>
                <label for="editName">Enter Applicant Name</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editAddress"></textarea>
                <label for="editAddress">Enter Applicant Address</label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editMobile"></textarea>
                <label for="editMobile">Enter Applicant Mobile</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editEmail"></textarea>
                <label for="editEmail">Enter Applicant Email Id</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="editAadharNo"></textarea>
                <label for="editAadharNo">Enter Applicant Aadhaar No</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="editApplicantAge"></textarea>
               <label for="editApplicantAge">Enter Applicant age</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="editId"></textarea>
               <label for="editId">Applicants insurance ongoing id</label>
            </div>
            <div className="my-5 mx-5 form-floating">
            <p style={{ fontWeight:'bold'}}>Upload documents(Mandatory*)</p>
            <label htmlFor="editDocumentType"></label>
            <select placeholder='Please pick a type' id="editDocumentType" value={editDocumentType} onChange={handleeditDocumentTypeChange} required style={{border:'1px solid black',width:'30%'}}>
              <option value="user">Aadhar</option>
              <option value="admin">Pan</option>
            </select>
          </div>
            <div> <FileUpload/> </div>
            <div className="my-5 mx-5 form-floating" style={{paddingLeft:'650px'}}>
          <button type="submit" id='updateButton'>Update</button>
          </div>
       </div>
        </div>
        
  )
}
