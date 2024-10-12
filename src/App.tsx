import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import connect from "./assets/connect-icon.png";
import event from "./assets/event-icon.png";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Pricing from "./components/Pricing/Pricing";
import Reviews from "./components/Reviews/Reviews";


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
        <div className="max-w-screen-xl mx-auto py-8 flex items-center gap-16 text-white">
          <h4 className="text-2xl font-semibold w-1/2">
            "Powerful tool to manage your wedding, engage guests, and celebrate together effortlessly.".
          </h4>
          <div className="flex w-1/2">
            <div className="flex gap-4 items-center w-1/2">
              <div className="bg-[#EB44B2] w-16 p-4 rounded-full">
                <img src={connect} alt="" />
              </div>
              <p>Connect with <br /> your guests</p>
            </div>
            <div className="flex gap-4 items-center w-1/2">
              <div className="bg-[#EB44B2] w-16 p-4 rounded-full">
                <img src={event} alt="" />
              </div>
              <p>Easy event <br /> management</p>
            </div>
          </div>
        </div>
      </div>

      <Features />
      <HowItWorks />
      <Pricing />
      <Reviews />
    </div>
  )
}

