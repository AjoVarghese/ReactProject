import React, { useEffect, useState } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../../../Components/Navbar/Navbar';
import './Profile.css'
import { Button } from 'bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfileReducer } from '../../../REDUX/Actions/USER_ACTIONS/userProfileReducer';

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const [profileImage , setProfileImage] = useState()

  // const userProfile = useSelector(state => state.userLoginReducer)
  //  const {loading,userLoginDetails,userLoginError} = userProfile
  //  console.log("PROFILE",userLoginDetails);

  // useEffect(() => {
  //   let userInfo = localStorage.getItem("userInfo")

  //   if(userInfo){
  //     navigate('/profile')
  //   } else {
  //     navigate('/')
  //   }
  // },[userLoginDetails])

  useEffect(() => {
    console.log("gggggg");
    dispatch(getUserProfileReducer())
  },[])


  const handleClick = () => {
     
  }

  return (
    <>
    <Navbar/>
    <div className='main--div'>

      <div className='left-section'>

       <div className='profile'>
        <h2 className='header'>PROFILE</h2>
         <div className='img-div'>
           <img src= { `https://d36g7qg6pk2cm7.cloudfront.net/assets/profile-f17aa1dfbd0cb562142f1dcb10bb7ad33e1ac8417ad29a1cdab7dfbfbbfe2f15.png`} alt="" />
         </div>
         <div className='upload-button'>
            <button onClick={handleClick}>Upload Image</button>
         </div>
         <div className='details-div'>
            <p>{ "UserName"}</p>
            <p>{ "Mobile No"}</p>
            <p>{ "Email"}</p>
         </div>
         
       </div>

       <div className='wallet-card'>
         <p>My Wallet Balance : 0.0</p>
         <button>Check My Wallet</button>
         {/* <Button>Check My Wallet</Button> */}
        </div>
      </div>

      <div className='right-section'>
        <div className='documents'>
          fff
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile