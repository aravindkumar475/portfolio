// import about from '../assets/about.jpg';

const Services = () => {
  return (
    <div id="Service" className="p-20 flex flex-col items-center justify-center ">
      <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800'>Services</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 uppercase'>
        <h2 data-aos="fade-down" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>Javascript</h2>
        <h2 data-aos="fade-left" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>react</h2>
        <h2 data-aos="fade-right" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>Html&css</h2>
        <h2 data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>java</h2>
        
      </div>
    </div>
    
  )
}

export default Services