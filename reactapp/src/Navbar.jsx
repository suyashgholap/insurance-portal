import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <div style={{color:'white',backgroundColor:'#42618f',border:'2px solid black'}}>
        <nav className="navbar navbar-expand-lg" style={{color:'white',backgroundColor:'#42618f',textAlign:'center',border:'2px solid black',fontSize:25}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-5 mb-lg-2">
                    <li className="nav-item px-5">
                        <a className="nav-link" style={{color:'white'}} href="#" >Life Insurance</a>
                    </li>
                    <li className="nav-item px-5">
                        <Link to={props.l1} className="nav-link" style={{color:'white'}} id1={props.id1} >{props.title1}</Link>
                    </li>
                    <li className="nav-item px-5">
                        <Link to={props.l2} className="nav-link active" style={{color:'white'}} aria-current="page" id2={props.title2}>{props.title2}</Link>
                    </li>
                    <li className="nav-item px-5">
                        <Link to={props.l3} className="nav-link" style={{color:'white'}} id3={props.id3}>{props.title3}</Link>
                    </li>
                    <li className="nav-item px-5">
                        <Link to="/login" className="nav-link" style={{color:'white',paddingLeft:'500px'}} id="Logout">Logout</Link>
                    </li>
                </ul>            
                </div>
            </div>
        </nav>
    </div>
  )
}
Navbar.propTypes={title1:PropTypes.string,title2:PropTypes.string,title3:PropTypes.string};
Navbar.defaultProps={title1:'set title1',title2:'set title2',title3:'set title3',id1:'set id1',id2:'set id2',id3:'set id3'}

