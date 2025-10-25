import { useEffect } from 'react';
import Canvas from './Canvas';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';



function App(){
  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
  },[]);

  return(<>
    <div className="w-full relative min-h-screen  ">
      {data[0].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
     
    </div>

    <div className="w-full relative min-h-screen  ">
      {data[1].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
     
    </div>

    <div className="w-full relative min-h-screen  ">
      {data[2].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
     
    </div>

    <div className="w-full relative min-h-screen  ">
      {data[3].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
     
    </div>

    <div className="w-full relative min-h-screen  ">
      {data[4].map((item, index) => (
        <Canvas details={item} key={index}/>
      ))}
     
    </div>
  </>);
}
export default App;