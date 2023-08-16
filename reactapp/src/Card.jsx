import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const policyData = [
  {
    policyName: 'Life insurance',
    yourPolicyId: '928888211',
    applicableAge: '5 to 50',
    policyDetails: 'aaa....',
    numberOfYearsPlan: '10 years',
    claimAmount: '2,00,000',
    termsAndConditions: 'xx.....',
  },
]

export default function Card(props) {
  return (
    <div style={{paddingLeft:props.paddingl,alignContent:'center'}}>
        <div className="card my-5 mx-5" style={{width:'50rem'}}>
            <div className="card-body d-flex" id1={props.id1}>
              <div className='container-lg p-2 flex-fill'>
                <h5 className="my-3">Policy name: {policyData[0].policyName}</h5>
                
                <h5 className="my-3">Applicable age: {policyData[0].applicableAge}</h5>
                
                <h5 className="my-3">Number of years plan:{props.numberOfYearsPlan} </h5>
                <h5 className="my-3">Claim Amount: {policyData[0].claimAmount}</h5>
              </div>
              <div className='container-lg p-2 flex-fill'>
                <h5 className="my-3">Your policy id: {policyData[0].yourPolicyId}</h5>
                <h5 className="my-3">Policy Details: {policyData[0].policyDetails}</h5>
                <h5 className="my-3">Terms and Conditions: {policyData[0].termsAndConditions}</h5>
              </div>
            </div>
            
            <div  className='mx-5' style={{paddingLeft:"550px",display:props.c1}}>
              <a href="#" className="btn btn-primary" id="deletePolicy">Delete</a>
              <Link to={props.l4} className="btn btn-primary mx-2" id="editPolicy">Edit</Link>
            </div>
            <div  className='mx-5' style={{paddingLeft:"550px",display:props.c2,paddingBottom:'10px'}}>
              <Link to="/Userprofile" className="btn btn-primary mx-2">Select plan</Link>
            </div>
        </div>
    </div>
  )
}
Card.propTypes={c1:PropTypes.string};
Card.defaultProps={c1:'none',c2:'none',id1:'set id1',numberOfYearsPlan:'set numberOfYearsPlan',paddingl:'450px'}
