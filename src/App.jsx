import { useEffect } from 'react';
import Canvas from './Canvas';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';



function App(){
  // useEffect(()=>{
  //   const locomotiveScroll = new LocomotiveScroll();
  // },[]);

  return(<>
    <div className="w-full relative z-[1] min-h-screen  font-['Helvetica_Now_Display']">
      {data[0].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
     
      <div className='w-full h-screen text-white relative z-[1]' >
        <nav className='w-full flex items-center justify-between p-8'>
          <div className='brand text-2xl font-regular'>thirtysixstudios</div>
          <div className='links flex gap-10'>
            {["what we do", "Who we are", "How we give baack", "Talk to us"].map((link, index) => ( 
              <a 
              key ={index}
              href={`#${link.toLowerCase()}`} 
              className='text-md hover:text-gray-300'>{link}</a>
            ))}
          </div>
        </nav>

          <div className='textcontainer w-full px-[20%]'>
            <div className='text w-[50%]'>
              <h3 className='text-4xl leading-[1.5]'>At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h3>
              <p className='text-md w-[80%] mt-10 front-regular'>We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
              <p className='text-md mt-10'>Scroll</p>
            </div>
          </div>
          <div className='textcontainer absolute bottom-0 left-0 right-0 '>
            <h1 className='text-[17rem] font-normal tracking-tight leading-none pl-4'>Thirtysixstudio</h1>
          </div>
      </div>
    </div>

    <div className="w-full relative z-[2] min-h-screen  font-['Helvetica_Now_Display'] text-white  ">
      {data[1].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}

      <div className='textcontainer w-full px-[20%] flex relative z-[1] justify-center align-center gap-20 mt-40'>
        <div className='text w-[50%]'>
          <h3 lassName='text-4xl leading-[1.5]'>01 --- WHAT WE DO</h3>
        </div>
        <div className='text w-[50%]'>
          <h3 className='text-4xl leading-[1.5]'>We aim to elevate digital production in the advertising space, bringing your ideas to life.</h3>
          <p className='text-md w-[80%] mt-10 front-regular'>As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.

            Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</p>
        </div>
      </div>
    </div>

    <div className="w-full relative z-[1] min-h-screen  font-['Helvetica_Now_Display'] text-white justify-center align-center gap-20 mt-[-1rem]">
      {data[2].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
      <div className=" w-full pl-10 pr-10">
      <p lassName='text-5xl  uppercase'>OUR SERVICES</p>
      <h3 className='text-5xl leading-relaxed w-full'>We provide you with captivating design, interactive animations, reliablecode, and immaculate project coordination.
      
      Whether you need a campaign built from scratch or assistance at a specific phase, we've got you covered.</h3>
      </div>
    </div>

    

    
    

    
  </>);
}
export default App;