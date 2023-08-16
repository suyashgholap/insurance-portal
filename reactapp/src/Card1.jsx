import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const policyData = [
  {
    policyName: 'zzzz',
    yourPolicyId: 'xxxx',
    applicableAge: '02939110',
    policyDetails: 'a@gmail.com',
    numberOfYearsPlan: '9929919292',
    claimAmount: 'CQ22342D2',
  },
]

export default function Card(props) {
  return (
    <div style={{paddingLeft:props.paddingl,alignContent:'center'}}>
        <div className="card my-5 mx-5" style={{width:'50rem'}}>
            <div className="card-body d-flex" id1={props.id1}>
              <div className='container-lg p-2 flex-fill'>
                <h5 className="my-3">Applicant name: {policyData[0].policyName}</h5>
                
                <h5 className="my-3">Address: {policyData[0].applicableAge}</h5>
                
                <h5 className="my-3">Mobile no:{props.numberOfYearsPlan} </h5>
                <h5 className="my-3">Email: {policyData[0].claimAmount}</h5>
              </div>
              <div className='container-lg p-2 flex-fill'>
                <h5 className="my-3">Aadhar No: {policyData[0].yourPolicyId}</h5>
                <h5 className="my-3">Pan Number: {policyData[0].policyDetails}</h5>
              </div>
            </div>
            
            <div  className='mx-5' style={{paddingLeft:"550px",display:props.c1}}>
              <button className="btn btn-primary" id="deletePolicy" >Delete</button>
              <Link to={props.l5} className="btn btn-primary mx-2" id="editPolicy">Edit</Link>
            </div>
            <div  className='mx-5' style={{paddingLeft:"550px",display:props.c2,paddingBottom:'10px'}}>
              <a href="#" className="btn btn-primary mx-2">Select plan</a>
            </div>
        </div>
    </div>
  )
}
Card.propTypes={c1:PropTypes.string};
Card.defaultProps={c1:'none',c2:'none',id1:'set id1',numberOfYearsPlan:'set numberOfYearsPlan',paddingl:'450px'}
