import React from 'react'
import { Typography } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
    <div className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        {/* <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
        <span className="w-20"><img src={logo} alt=""/></span>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://uddeshya-personal-portfolio.vercel.app/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://github.com/Uddeshya0323"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Github
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="linkedin.com/in/uddeshya-patel-a247611b2"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             Linkedin
            </Typography>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li> */}
        </ul>
      </div>
      {/* <hr className="my-8 border-blue-gray-50 py-10" /> */}
      <Typography color="blue-gray" className="text-center font-normal p-5 ">
        &copy; 2024 Uddeshya
      </Typography>
    </div>
    </>
  )
}

export default Footer