import '../index.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Project = () => {
  return (
    <div id="Project" className="p-20 flex flex-col items-center justify-center">
      <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 uppercase'>
        <img data-aos="fade-up" height={400} width={350}   className='text-[26px] flex items-center justify-center  rounded-3xl  border-2 border-fuchsia-800 b_glow' src={img1} alt="1" />
        <img data-aos="fade-down"  height={400} width={350}  className='text-[26px] flex items-center justify-center  rounded-3xl  border-2 border-fuchsia-800 b_glow' src={img2}   alt="2" />
        <img data-aos="fade-up"  height={400} width={350}  className='text-[26px] flex items-center justify-center  rounded-3xl  border-2 border-fuchsia-800 b_glow' src={img3}  alt="3" />
        <img data-aos="fade-down"  height={400} width={350}  className='text-[26px] flex items-center justify-center  rounded-3xl  border-2 border-fuchsia-800 b_glow' src={img4}  alt="4" />
      </div>
    </div>
  )
}

export default Project