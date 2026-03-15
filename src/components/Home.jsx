import headphones from "../assets/headphones.avif"
import human from "../assets/human.png"
import features1 from "../assets/features1.avif"
import features2 from "../assets/features2.avif"
import features3 from "../assets/features3.avif"
import features4 from "../assets/features4.avif"
import { FaTrophy, FaStar, FaCheckCircle, FaHeadphones } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useState } from "react";
import grey from "../assets/grey.avif";
import neon from "../assets/neon.avif";
import blue from "../assets/blue.avif";



  


function Home(){

  const [color, setColor] = useState("Graphite Black");
  const [image, setImage] = useState(headphones);
  const [selected, setSelected] = useState("black");
    return(


    
    <>

    <section className="h-screen">
        <div>
        <h1 className="text-[180px] text-center mt-20 font-bold tracing-wide text-gray-100" >AURAMAX</h1>
        <img className="h-[480px] absolute left-130 top-20 " src={headphones} alt="" />
        </div>


        <div className="flex justify-between p-22 mt-16">
            <div >
                <p className="">Experience studio-grade audio with industry-leading <br />
                 noise cancellation and stunning minimalist design.</p>

                 <button className="rounded-4xl border p-3 mt-5  border-gray-400 hover:bg-black hover:text-white">Watch Demo</button>
            </div>

            <div>
                <p className="text-xl font-medium mt-20">
                 Precision. Power. Purity. </p>
            </div>

            <div>
                <p className="text-gray-500 mt-20">Ships Starting  <span className="text-black"> July 15  </span>· Limited Quantities Available</p>
            </div>

        </div>

    </section>


    

    <section className="h-screen">
  <div className="relative">
    
   
    <img
      className="ml-140 w-[490px]"
      src={human}
      alt=""
    />

   
    <div className="absolute bottom-0 left-0 w-full h-40 
                    bg-gradient-to-t from-white via-white/80 to-transparent">
    </div>

  
    <h1 className="absolute left-40 top-110 text-2xl font-semibold  bg-gradient-to-r 
                   from-green-300 to-blue-500 
                   bg-clip-text text-transparent" >
      Meet AuraMax
    </h1>

    

    <p className="absolute left-40 top-120 text-4xl font-semibold leading-tight">
      Premium wireless headphones that blend precision, power, and 
      comfort — <br /> featuring adaptive noise cancellation, studio-level
      clarity, and a fit so <br /> light it disappears. Just pure audio, no
      distractions.
    </p>

  </div>
</section>

    {/* #features  */}

    <section>
        <h1 className="text-2xl ml-40 font-semibold bg-gradient-to-r
                   from-green-300 via-blue-500 to-blue-700 
                   bg-clip-text text-transparent">Features</h1> <br />
        <p className="text-6xl ml-40 font-semibold">Every Note. Exactly as It Was <br /> Meant to Be Heard</p> <br />
        <p className="ml-40 font-medium">40mm titanium drivers deliver unmatched clarity and depth — from soaring highs to <br /> thunderous lows</p>
    </section>


      


   {/* #layout session */}
  
     <section className="min-h-screen px-40 py-16">

  {/* TOP ROW */}
  <div className="flex gap-6">

    {/* LEFT BIG CARD */}
    <div className="relative flex-[2] rounded-2xl border border-gray-200 bg-gradient-to-b from-blue-200 to-white p-8 overflow-hidden">

      <h1 className="absolute top-8 left-8 font-bold text-4xl text-blue-500">
        Active
      </h1>

      <h1 className="absolute bottom-10 left-8 text-6xl font-semibold leading-tight">
        Noise <br /> Cancellation
      </h1>

      <img
        src={features1}
        alt=""
        className="absolute right-0 bottom-0 h-96"
      />
    </div>

    {/* RIGHT SMALL CARD */}
    <div className="relative flex-1 rounded-2xl border border-gray-200 bg-gray-100 p-8 overflow-hidden">

      <h1 className="text-xl font-semibold text-center">
        Smart Connectivity
      </h1>

      <img
        src={features2}
        alt=""
        className="mt-8 mx-auto h-64"
      />
    </div>

  </div>
<div className="flex gap-6 mt-6">


  {/* BOTTOM ROW  */}
  {/* LEFT SMALL CARD */}
  <div className="relative flex-1 h-[420px] rounded-2xl border border-gray-200 bg-gray-100 p-8 overflow-hidden">

    <h1 className="text-2xl font-semibold">
      40-Hour Battery Life
    </h1>

    <img
      src={features3}
      alt=""
      className="absolute bottom-0 left-0 w-full object-contain"
    />

  </div>


  {/* RIGHT BIG CARD */}
  <div className="relative flex-[2] h-[420px] rounded-2xl border border-green-200 bg-gradient-to-r from-green-100 to-white p-8 overflow-hidden">

    <h1 className="absolute top-8 left-8 text-4xl font-bold text-green-400">
      Hi-Res
    </h1>

    <h1 className="absolute bottom-10 left-8 text-6xl font-semibold">
      Audio Certified
    </h1>

    <img
      src={features4}
      alt=""
      className="absolute right-0 bottom-0 h-full object-contain"
    />

  </div>

</div>
</section>

             
    <section className="h-full p-20 ">

      {/* HEADING */}
      <h1 className="text-2xl ml-20 font-semibold bg-gradient-to-r
                   from-green-300 via-green-500 to-blue-500 
                   bg-clip-text text-transparent">
        Design & Built.
      </h1>

      <p className="text-5xl text-6xl font-bold mt-4 ml-20">
        Choose your Style.
      </p>

      {/* IMAGE */}
      <img
        className="h-[400px] md:h-[430px] mx-auto mt-10 transition duration-300"
        src={image}
        alt="headphone"
      />

      {/* COLOR NAME */}
      <h1 className="font-semibold mt-4 text-lg text-center">
        {color}
      </h1>

      {/* COLOR BUTTONS */}
      <div className="flex gap-4 justify-center mt-6">

        {/* BLACK */}
        <button
          onClick={() => {
            setColor("Graphite Black");
            setImage(headphones);
            setSelected("black");
          }}
          className={`w-7 h-7 rounded-full bg-black 
          ${selected === "black" ? "ring-2 ring-offset-2 ring-black" : ""}`}
        ></button>

        {/* GREY */}
        <button
          onClick={() => {
            setColor("Silver Grey");
            setImage(grey);
            setSelected("grey");
          }}
          className={`w-7 h-7 rounded-full bg-gray-300 
          ${selected === "grey" ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
        ></button>

        {/* NEON */}
        <button
          onClick={() => {
            setColor("Neon Green");
            setImage(neon);
            setSelected("neon");
          }}
          className={`w-7 h-7 rounded-full bg-green-300 
          ${selected === "neon" ? "ring-2 ring-offset-2 ring-green-300" : ""}`}
        ></button>

        {/* BLUE */}
        <button
          onClick={() => {
            setColor("Ocean Blue");
            setImage(blue);
            setSelected("blue");
          }}
          className={`w-7 h-7 rounded-full bg-blue-400 
          ${selected === "blue" ? "ring-2 ring-offset-2 ring-blue-400" : ""}`}
        ></button>

      </div>

    </section>

                   
                   
                   
      <section className="max-w-6xl mx-auto px-6 py-16">

     
      <div>
        <p className=" text-2xl  font-semibold bg-gradient-to-r
                   from-green-300 via-blue-500 to-blue-700 
                   bg-clip-text text-transparent">
          Technical Specifications
        </p>

        <h2 className="text-5xl font-bold mt-2">
          Engineered to Perform
        </h2>

        <p className="text-gray-500 mt-3">
          All the details that make the AuraMax exceptional.
        </p>
      </div>

   
      <div className="mt-12">
        <table className="w-full border-collapse">

          <thead>
            <tr className="text-left border-b">
              <th className="py-4 font-semibold">Feature</th>
              <th className="py-4 font-semibold">Specification</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-5">Driver Size</td>
              <td className="py-5">
                40mm Titanium-Coated Dynamic Drivers
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Frequency Response</td>
              <td className="py-5">10Hz – 40kHz</td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Impedance</td>
              <td className="py-5">32Ω</td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Bluetooth Version</td>
              <td className="py-5">
                5.3 with Multipoint Connectivity
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Audio Codecs</td>
              <td className="py-5">
                SBC, AAC, aptX™, aptX Adaptive™
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Noise Cancellation</td>
              <td className="py-5">
                Hybrid Active Noise Cancellation (up to 40dB)
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Battery Life</td>
              <td className="py-5">
                Up to 40 hours (ANC off), 30 hours (ANC on)
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Charging Time</td>
              <td className="py-5">
                1.5 hours (USB-C Fast Charge)
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-5">Microphones</td>
              <td className="py-5">
                Dual Beamforming Mics with ENC
              </td>
            </tr>

            <tr>
              <td className="py-5">Weight</td>
              <td className="py-5">260g</td>
            </tr>

          </tbody>
        </table>
      </div>

    </section>


    
 <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className=" text-2xl font-semibold  bg-gradient-to-r 
                   from-green-300 to-blue-500 
                   bg-clip-text text-transparent">Powered by</p>

        <h2 className="text-6xl font-bold mt-4 mb-4">
          NovaCore™ Audio Engine
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Adaptive sound calibration and environmental tuning powered by our proprietary chip.
        </p>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="flex flex-col items-center">
            <FaTrophy className="text-teal-400 text-3xl mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Design Award Winner</h3>
            <p className="text-gray-600 text-sm">
              Recognized globally for outstanding product design and innovation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaStar className="text-teal-400 text-3xl mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Rated by 10,000+ Users</h3>
            <p className="text-gray-600 text-sm">
              Loved by audiophiles, creators, and everyday listeners around the world.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-teal-400 text-3xl mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Trusted by Studio Professionals</h3>
            <p className="text-gray-600 text-sm">
              Used in real-world production by award-winning sound engineers.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <HiSpeakerWave className="text-teal-400 text-3xl mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Certified Hi-Res Audio</h3>
            <p className="text-gray-600 text-sm">
              Delivers sound quality that exceeds CD standards — crystal-clear and lossless.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHeadphones className="text-teal-400 text-3xl mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Featured in TechCrunch & Wired</h3>
            <p className="text-gray-600 text-sm">
              Loved by audiophiles, creators, and everyday listeners around the world.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FiBox className="text-teal-400 text-3xl mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Over 100K Units Sold Worldwide</h3>
            <p className="text-gray-600 text-sm">
              Used in real-world production by award-winning sound engineers.
            </p>
          </div>

        </div>
      </div>
    </section>



    <section>
          <div className="py-20 bg-white text-center">

      {/* Heading */}
      <p className=" text-3xl font-semibold  bg-gradient-to-r
                   from-green-300 via-blue-500 to-blue-700 
                   bg-clip-text text-transparent">Testimonials</p>

      <h2 className="text-4xl font-bold mt-2">
        Loved by Audiophiles & Creators
      </h2>

      <p className="text-gray-500 mt-3">
        Trusted by producers, streamers, and everyday listeners worldwide.
      </p>

      {/* Cards */}
      <div className="flex justify-center gap-8 mt-12 px-10">

        {/* Card 1 */}
        <div className="bg-gray-100 rounded-xl p-8 w-80 text-left">
          <RiDoubleQuotesR />

          <p className="mt-3 text-gray-800">
            These sound better than my studio monitors.
          </p>

          <div className="flex items-center mt-6">
            <img
              src="https://i.pravatar.cc/40?img=3"
              className="rounded-full w-10 h-10"
            />
            <div className="ml-3">
              <p className="font-semibold">Beat Craft</p>
              <p className="text-gray-500 text-sm">@beatcraft</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-xl p-8 w-80 text-left">
          <RiDoubleQuotesR />

          <p className="mt-3 text-gray-800">
            I wear them for 8 hours straight — no fatigue.
          </p>

          <div className="flex items-center mt-6">
            <img
              src="https://i.pravatar.cc/40?img=5"
              className="rounded-full w-10 h-10"
            />
            <div className="ml-3">
              <p className="font-semibold">Emily L.</p>
              <p className="text-gray-500 text-sm">@emilylondon</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-xl p-8 w-80 text-left">
          <RiDoubleQuotesR />

          <p className="mt-3 text-gray-800">
            You’ll hear songs you thought you knew, differently.
          </p>

          <div className="flex items-center mt-6">
            <img
              src="https://i.pravatar.cc/40?img=8"
              className="rounded-full w-10 h-10"
            />
            <div className="ml-3">
              <p className="font-semibold">Marcus T.</p>
              <p className="text-gray-500 text-sm">@marcusprod</p>
            </div>
          </div>
        </div>

      </div>

    </div>
    </section>








    <section>
          <div className="py-20 text-center">

      <p className=" font-semibold text-2xl  bg-gradient-to-r
                   from-green-300 via-blue-500 to-blue-700 
                   bg-clip-text text-transparent">FAQ</p>

      <h2 className="text-5xl font-bold mt-2">
        Got Questions? We’ve Got <br /> Answers.
      </h2>

      <div className="max-w-3xl mx-auto mt-12 space-y-4">

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            What’s the battery life like with ANC on?
          </summary>
          <p className="mt-3 text-gray-600">
            Battery lasts around 20–30 hours with ANC enabled.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            Can I use it wired and wireless?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, you can use it both with Bluetooth or a cable.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            Is it compatible with iOS and Android?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, it works with both iOS and Android devices.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            Does it support multipoint Bluetooth connections?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, it allows connection to multiple devices.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            How long does it take to fully charge the headphones?
          </summary>
          <p className="mt-3 text-gray-600">
            It takes about 2 hours to fully charge.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            What’s included in the box?
          </summary>
          <p className="mt-3 text-gray-600">
            Headphones, charging cable, audio cable, and manual.
          </p>
        </details>

      </div>
    </div>
    </section>










  <section>
     <div className="py-32 bg-gradient-to-b from-blue-300 to-green-200 flex justify-center">

      <div className="w-[80%] bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-center py-20">

        <h2 className="text-5xl font-bold text-white">
          Stay Tuned for Sound Evolution
        </h2>

        <p className="text-white/80 mt-4">
          Get early access to future drops, updates, and exclusive content.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="mt-8 px-4 py-2 rounded-md w-72 outline-none border border-gray-600"
        />

        <div>
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full">
            Join the Sound Club
          </button>
        </div>

      </div>

    </div>
  </section>

    </>
    
)
}




export default Home