import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Services from "./components/Services"
import { BallTriangle } from "react-loader-spinner"


const App = () => {
   const [loading,setLoading]=useState(false);
   useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)

   },[])
  return (
    
      <>
      {
        loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#d946ef"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
        </div>
        :
        <div className="bg-slate-900"><Navbar /><Banner /><About /><Services /><Project /><Contact /><Footer />
        </div>
      }
      </>
    
   
  );
};

export default App;

