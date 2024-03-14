import about from '../assets/about.jpg';
import resume from '../assets/aravindresume.pdf'


const About = () => {
  return (

       <div data-aos="fade-down" id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-10 items-center">
                     <img src={about} width={290} height={290} className="border-2 p-1 border-fuchsia-500 img_glow" alt=""></img>

      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"> About Me
        </h1>
        <p data-aos="fade-left">
        A passionate full-stack developer. I thrive on solving coding puzzles, creating seamless user experiences, and collaborating with cross-functional teams. When I’m not immersed in code, you’ll find me hiking, experimenting with recipes, or diving into sci-fi novels. Let’s connect and build something amazing together! 🚀
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"> <a href={resume} download='resume'>Resume</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About