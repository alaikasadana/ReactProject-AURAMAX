import { Link, Outlet } from "react-router-dom"
import auramaxlogo from "../assets/auramaxlogo.png"
import aurafooter from "../assets/aurafooter.avif"


function Layout(){
    return(
    
    <>

 
   <nav className="flex items-center px-10 py-4">
  

  <div className="flex items-center gap-2">
    <img src={auramaxlogo} alt="logo" className="w-8 h-8" />
    <h1 className="font-bold text-xl">AURAMAX</h1>
  </div>


  <ul className="flex gap-10 flex-1 justify-center">
    <li className="hover:underline">Features</li>
    <li className="hover:underline">Color</li>
    <li className="hover:underline">Pricing</li>
    <li className="hover:underline">Contact</li>
  </ul>

 <Link to="/signup">
  <button className="rounded-3xl bg-black px-6 py-2 text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500   hover:text-black">
    Pre-Order Now
  </button>
 </Link>
</nav>

          <main>
            <Outlet/>

        </main>






<footer className="bg-gradient-to-b from-[#caf199] via-[#cff1a5] to-[#f4f4f4] h-screen">

  <div className="flex justify-between pt-30">


  {/* #left  */}
  <div className="ml-20">
    
    <div className="text-xl font-bold flex items-center gap-2">
      <img className="h-10" src={aurafooter} alt="" />
      <h1>AURAMAX</h1>
    </div>

    <div>
      <h3 className=" text-base mt-1 ml-1">Designed to move you</h3>
    </div>

    <div>

    </div>

  </div>

  
    {/* #center  */}

    <div className="ml-60">
      <h1 className="text-gray-600 text-[13px]">Quick Links</h1> <br />
      <ul>
        <li>Features</li> <br /> 
        <li>Color</li> <br />
        <li>Pricing</li> <br />
        <li>Contact</li> <br />
      </ul>
    </div>


    {/* #right  */}

        <div className=" mr-80">
      <h1 className="text-gray-600 text-[13px]">Pages</h1> <br />
      <ul>
        <li>Contact</li> <br />
        <li>Term of Use</li> <br />
        <li>Refund Policy</li> <br />
        <li>FQA</li> <br />
      </ul>
    </div>


  </div>




{/* #big text  */}
<div className="relative h-[220px]  overflow-hidden">

  <h1
    className="
    absolute bottom-0 left-1/2 -translate-x-1/2
    text-[200px] md:text-[260px]
    font-bold
    tracking-[-5px]
    leading-[0.85]
    text-[#ebf3e9]
    select-none pointer-events-none
    [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
    ">
    AURAMAX
  </h1>

</div>


{/* #lastpart  */}
<div className="text-center mt-13 ">
   <p>AuraMax © 2025  - All rights reversed</p>
</div>

</footer>

    </>
    
)
}

export default Layout