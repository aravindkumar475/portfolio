import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
import { FaInstagram   } from "react-icons/fa";
import profile from '../assets/pic.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease-out-quarts', // default easing for AOS animations
  once:false,
});
const Banner = () => {
  return (
    <div  className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-10 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal ">
          I'm <span className="text-fuchsia-500 uppercase"> Aravind KUMAR</span>
        </h1>
        <p data-aos="fade-up">
        Hi,My journey began with a fascination for coding, and over the years, I’ve honed my skills in various technologies. Here’s what defines me:
        </p>
        <div data-aos="fade-up" className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://github.com/aravindkumar475" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaGithub className="text-[28px]" />
              </a>
              <a href="www.linkedin.com/in/aravind-kumar-8b1a12288" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="https://x.com/aravind70850441?t=cQ0g3lLZRz14fUUY9tha5Q&s=08" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaTwitter  className="text-[28px]" />
              </a>
              <a href="https://www.instagram.com/_.aravind_ak?igsh=YjRvYjhxYWc4czV6" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaInstagram  className="text-[28px]" />
              </a>
            </div>
          </div> 
        </div>
      </div>
      <img data-aos="fade-left" src={profile} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt=""></img>
    </div>
  );
};

export default Banner;
