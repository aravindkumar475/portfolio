import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
import { FaInstagram   } from "react-icons/fa";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className="mb-4 md:mb-0"> 
          <span className="text-[22px] font-semibold text-white py-2 uppercase">Porfolio</span>
          <p className="text-[13px] my-4"></p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
            <ul className="text-[16px] my-4">
              <li className="my-2 ">Web Design</li>
              <li className="my-2 ">Web Development</li>
              <li className="my-2 ">SEO</li>
              <li className="my-2 ">E-commerce</li>
            </ul>
          
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <p className="text-[13px] my-4">Email:saravindkumar45@gmail.com</p>
          <p className="text-[13px] my-4">Phone: 9677216386</p>
        </div>
        <div>
        <h2 className="mb-4 md:mb-0 text-[22px] lg:ml-5 font-semibold text-fuchsia-800 py-2 uppercase"> Follow Me</h2>
        <div className="flex space-x-4 lg:ml-5">
          <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/aravindkumar475">
            <FaGithub />
          </a>
          <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="www.linkedin.com/in/aravind-kumar-8b1a12288

">
            <FaLinkedinIn />
          </a>
          <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://x.com/aravind70850441?t=cQ0g3lLZRz14fUUY9tha5Q&s=08">
            <FaTwitter />
          </a>
          <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.instagram.com/_.aravind_ak?igsh=YjRvYjhxYWc4czV6">
            <FaInstagram />
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer