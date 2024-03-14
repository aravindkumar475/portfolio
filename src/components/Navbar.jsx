import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = () => {
  
  const[click,setClick] = useState(false);

  const handleMenu=()=>setClick(!click);

  const content = 
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 trasition">
        <ul className="text-center text-xl p-20 sm:hover:cursor-pointer">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
          </Link>
          <Link spy={true} smooth={true} to="Service">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Service</li>
          </Link>
          <Link spy={true} smooth={true} to="Project">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Project</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
          </Link>
        </ul>
      </div>
    </>;
    return (
      <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">Portfolio</span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer " ><a href="#Home">Home</a></li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer "><a href="#About">About</a></li>
              </Link>
              <Link spy={true} smooth={true} to="Service">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to="Project">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer "><a href="#Project">Project</a></li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer "><a href="#Contact">Contact</a></li>
              </Link>
            </ul>
            </div>
          </div>
          <div>
            {click && content}
        
        <button className="block sm:hidden transtion mt-3" onClick={handleMenu}>
          {click ? <FaTimes /> : <RiMenu3Fill />}
        </button>
        </div>
        </div>

        
      </nav>
    );
};


export default Navbar;
