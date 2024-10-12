import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-6 p-10 justify-center items-center max-w-screen-xl mx-auto">
            <div className="w-full md:w-1/2">
                <img className="w-full" src="https://i.ibb.co/PDrgN6r/not-found.jpg" alt="" />
            </div>
            <div className="w-full md:w-1/2 text-center">
                <h1 className="text-5xl md:text-8xl font-bold text-[#EB44B2]">ERROR</h1>
                <h3 className="my-4 text-2xl font-semibold">Page not found</h3>
                <Link to="/"><button className="btn bg-gradient-to-br from-teal-500 to-[#EB44B2] text-white">Go to Home</button></Link>
            </div>
        </div>
    );
};