import React from 'react'
import Login from './Login/Login'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Auth/Signup';
import Userviewpolicy from './user/Userviewpolicy'
import Adminaddpolicy from './admin/Adminaddpolicy'
import Userprofile from './user/Userprofile'
import Userappliedpolicy from './user/Userappliedpolicy'
import Adminappliedpolicy from './admin/Adminappliedpolicy'
import Admineditappliedpolicy from './admin/Admineditappliedpolicy'
import Adminviewapplicants from './admin/Adminviewapplicants'
import Admineditapplicants from './admin/Admineditapplicants'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user">
            <Route path="/user/Userviewpolicy" element={<Userviewpolicy />} />
            <Route path="/user/Userprofile" element={<Userprofile />} />
            <Route path="/user/Userappliedpolicy" element={<Userappliedpolicy/>} />
          </Route>
          <Route path="/admin">            
            <Route path="/admin/Adminaddpolicy" element={<Adminaddpolicy/>} />
            <Route path="/admin/Adminappliedpolicy" element={<Adminappliedpolicy/>} />
            <Route path="/admin/Admineditappliedpolicy" element={<Admineditappliedpolicy/>} />
            <Route path="/admin/Adminviewapplicants" element={<Adminviewapplicants/>} />
            <Route path="/admin/Admineditapplicants" element={<Admineditapplicants/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
