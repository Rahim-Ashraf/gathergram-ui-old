import { Link } from "react-router-dom";
import logo from "/assets/gathergram-logo.png"
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <div className="bg-[#212121] py-12 px-16 text-gray-300">
                <div className="flex justify-between">
                    <div>
                        <h5 className="font-bold text-white">Join our newsletter</h5>
                        <p>We'll send you a nice letter once per week. No spam.</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="text" placeholder="Enter you email" className="px-4 py-2 rounded-lg" />
                        <button className="bg-[#F5169C] px-4 py-2 text-white font-semibold rounded-lg">Subscribe</button>
                    </div>
                </div>
                <hr className="my-8 border border-gray-600" />
                <footer className="grid grid-cols-6 gap-4">
                    <aside className="col-span-2 max-w-64">
                        <Link to="/" className="cursor-pointer flex items-center gap-2">
                            <div className="w-4 h-4">
                                <img src={logo} alt="logo" className="w-full" />
                            </div>
                            <h2 className="text-xl text-white">GatherGram</h2>
                        </Link>
                        <p className="py-4">Medfysio provides clear and easy to understand health-related information resource or services.</p>
                        <div className="flex gap-4">
                            <FaTwitter className="text-2xl text-white" />
                            <FaFacebook className="text-2xl text-white" />
                            <FaLinkedin className="text-2xl text-white" />
                            <FaYoutube className="text-2xl text-white" />
                        </div>
                    </aside>
                    <nav className="col-span-1 flex flex-col space-y-4">
                        <h6 className="text-white font-bold pb-2">Navigate</h6>
                        <Link to="#" className="link link-hover">Home</Link>
                        <Link to="#" className="link link-hover">Features</Link>
                        <Link to="#" className="link link-hover">How It Works</Link>
                        <Link to="#" className="link link-hover">Pricing</Link>
                        <Link to="#" className="link link-hover">About</Link>
                        <Link to="#" className="link link-hover">Contact</Link>
                    </nav>
                    <nav className="col-span-1 flex flex-col space-y-4">
                        <h6 className="text-white font-bold pb-2">Support Us</h6>
                        <Link to="#" className="link link-hover">FAQ`s</Link>
                        <Link to="#" className="link link-hover">Contact Us</Link>
                        <Link to="#" className="link link-hover">Support Center</Link>
                        <Link to="#" className="link link-hover">Security</Link>
                    </nav>
                    <nav className="col-span-1 flex flex-col space-y-4">
                        <h6 className="text-white font-bold pb-2">Partner</h6>
                        <Link to="#" className="link link-hover">Our</Link>
                        <Link to="#" className="link link-hover">Partners</Link>
                        <Link to="#" className="link link-hover">Subscriber</Link>
                    </nav>
                    <nav className="col-span-1 flex flex-col space-y-4">
                        <h6 className="text-white font-bold pb-2">Contact US</h6>
                        <p className="link link-hover">GatherGram@business.com</p>
                        <p className="link link-hover">+61 7 7010 6803</p>
                        <button className="text-white font-bold bg-[#F5169C] px-4 py-2 rounded-full w-fit">Help Center</button>
                    </nav>
                </footer>
            </div>
            <div className="bg-gray-100 px-16 py-4 flex justify-between">
                <p>© 2024 GatherGram, We love our users!</p>
                <p>Copyright © 2024 all rights reserved</p>
                <div className="flex items-center gap-2">
                    <Link to="#">Terms & Conditions ,</Link>
                    <Link to="#">Privacy Policy ,</Link>
                    <p>Sitemap</p>
                </div>
            </div>
        </>
    )
}
