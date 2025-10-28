import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas details={canvasdets} key={index} />
          ))}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[17rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative z-[2] font-['Helvetica_Now_Display'] text-white py-24">
     {showCanvas && data[1].map((item, index) => (
       <Canvas details={item} key={index}/>
     ))}


 <div className='textcontainer w-full px-[20%] flex relative z-[1] justify-center items-center gap-12 mt-12'>
       <div className='text w-[50%]'>
         <h3 className='text-4xl leading-[1.5]'>01 --- WHAT WE DO</h3>
       </div>
       <div className='text w-[50%]'>
         <h3 className='text-4xl leading-[1.5]'>We aim to elevate digital production in the advertising space, bringing your ideas to life.</h3>
         <p className='text-md w-[80%] mt-10 font-regular'>As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.


           Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</p>
       </div>
     </div>
   </div>


 <div className="w-full relative z-[2] font-['Helvetica_Now_Display'] text-white justify-center items-center gap-12 py-24">
     {showCanvas && data[2].map((item, index) => (
       <Canvas details={item} key={index}/>
     ))}
     <div className=" w-full pl-10 pr-10 ">
        <h1 className='text-6xl leading-relaxed  uppercase'>OUR SERVICES</h1>
        <h3 className='text-4xl leading-relaxed w-full'>We provide you with captivating design, interactive animations, reliable code, and immaculate project coordination.
      
       Whether you need a campaign built from scratch or assistance at a specific phase, we've got you covered.</h3>
     </div>
   </div>








 <footer className="w-full relative z-[3] font-['Helvetica_Now_Display'] text-white py-20">
     {showCanvas && data[3].map((item, index) => (
       <Canvas details={item} key={index} />
     ))}


     <div className="max-w-6xl mx-auto px-10 py-20 relative z-[3]">
       <div className="grid grid-cols-3 gap-8">
         <div className="flex flex-col gap-3">
           <a href="#" className="hover:underline">LinkedIn</a>
           <a href="#" className="hover:underline">Instagram</a>
         </div>


         <div className="flex flex-col items-center text-center">
           <p className="font-medium">All Rights Reserved</p>
           <p className="mt-1">©2025, Thirtysixstudio</p>
           <p className="text-sm mt-6">Thirtysixstudio is registered with the Dutch Chamber of Commerce under registration number KVK 90310152.</p>
         </div>


         <div className="flex flex-col items-end">
           <p>hello@thirtysixstudio.com</p>
           <p className="mt-1">Amsterdam and worldwide</p>
           <div className="mt-6 flex flex-col gap-4">
             <button className="rounded-full border px-6 py-2 text-sm">PRIVACY STATEMENT</button>
             <button className="rounded-full border px-6 py-2 text-sm">BACK TO TOP</button>
           </div>
         </div>
       </div>


 <h3 className="text-[4rem] font-normal tracking-tight leading-none text-center mt-8">Thirtysixstudio</h3>
     </div>
   </footer>


    </>
  );
}

export default App;