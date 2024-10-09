import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-[#EB44B2] p-2 text-white flex items-center justify-center gap-2">
        <button className="py-1 px-6 rounded-full bg-white text-black">New</button>
        <p>We are excited to announce Lorem Ipsum.</p>
        <a href="#" className="underline">Learn more</a>
      </div>
      <div className="shadow-xl">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="bg-[#212121]">
        <div className="max-w-screen-xl mx-auto py-8 flex items-center justify-between text-white">
          <p>
            "Powerful tool to manage your wedding, engage guests, and celebrate together effortlessly.".
          </p>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <p>Connect with your guests</p>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <p>Easy event management</p>
          </div>
        </div>
      </div>
    </div>
  )
}

