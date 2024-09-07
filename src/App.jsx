import {React , useState , useEffect} from "react";
import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./component/Footer";
import Home from './component/Home'
import Navbar from './component/Navbar'
// import { auth } from "./component/Firebase/Firebase";

function App() {

  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);


  
  

  return (
   <>
   {/* <div id="main-container" className=' grid relative w-screen '> */}
   {/* <div id="navbar-main " className=' w-full z-30 fixed'>
   <Navbar />
   </div> */}
   <div id="outlet" className='w-full'>
    <Outlet/>
   </div>
   {/* <div id="footer" className="">
   <hr className="my-8 border-blue-gray-50" />
   <Footer/>
   </div> */}
   {/* </div> */}
   
   </>
  )
}

export default App
