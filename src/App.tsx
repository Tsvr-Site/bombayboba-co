import { useEffect, useState } from "react"
import NavbarPage from "./components/NavbarPage"


function App() {
  const[isloading,setisloading]=useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 3000);
  }, [])
  
  return (
    <div className="bg-black h-screen">
      {isloading?<LoadingComponent/>:
      <div className="flex flex-col h-screen">
        <NavbarPage/>
        <div className="bg-[url('/bridge2.png')] bg-cover bg-center bg-no-repeat flex w-full h-full font-knewave">
          <div className="text-[100px] text-center w-[50%] pt-[100px] pl-[280px]">
            <div className="-rotate-6">B O M B A Y</div>
            <div className="text-pink-500 -rotate-6">KA REAL SIP<span className="font-rubik-dirt">.</span></div>
            <div className="text-[30px] font-medium leading-[40px] mt-[40px]" >
              <p>Bubble tea, desi vibes &amp; good times.</p>
              <p>
                Made for <span className="text-pink-500">this city</span>, by this city.
              </p>
            </div>
          </div>
          <div className="flex">
            
            <img src="boba03.png" className="h-[50%] mt-[100px] "/>
            {/* <img src="boba01.png" className="h-[50%]"/> */}
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export function LoadingComponent(){
  return(
    <div className="flex h-full w-full text-center self-center">
      <div className="ml-auto mr-auto mt-auto mb-auto bg-white flex">
      <img src="l1.gif" className="h-[50%]"/>
      </div>
    </div>
  )
}
export default App
