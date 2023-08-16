import React from 'react'
import Navbar from '../Navbar'
import Card from '../Card'

export default function Userviewpolicy() {
  return (
    <div style={{backgroundColor:'#c6c1cf',paddingBottom:'150px'}}>
      <Navbar title1="View policy" title2="Profile" title3="My policy" id1="userViewPolicy" id2="profile" id3="userMyPolicy" l1="/Userviewpolicy" l2="/Userprofile" l3="/Userappliedpolicy"/>
      <Card c2="inline" id1="viewGrid1" numberOfYearsPlan=" 10 years"/>
      <Card c2="inline" id1="viewGrid2" numberOfYearsPlan=" 25 years"/>
    </div>
  )
}
