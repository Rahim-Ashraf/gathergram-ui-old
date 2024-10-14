import { Link, NavLink } from "react-router-dom";
import logo from "/assets/gathergram-logo.png"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function Navbar() {
    const nav = <>
        <NavLink to="/" className="">Home</NavLink>
        <NavLink to="/" className="">Features</NavLink>
        <NavLink to="/" className="">How it works</NavLink>
        <NavLink to="/" className="">Pricing</NavLink>
        <NavLink to="/" className="">About</NavLink>
        <NavLink to="/" className="">Contact</NavLink>
    </>

    const [isToken, setIsToken] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setIsToken(token || "");
    }, []);
    const handleLogout = () => {
        Swal.fire({
            title: "Want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("accessToken");
                setIsToken("");
            }
        });

    }

    return (
        <div className="navbar bg-base-100 px-0 max-w-screen-xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <details>
                        <summary className="btn btn-ghost lg:hidden">
                            <div tabIndex={0} role="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                        </summary>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </details>
                </div>
                <Link to="/" className="btn btn-ghost flex items-center">
                    <div className="w-4 h-4">
                        <img src={logo} alt="logo" className="w-full" />
                    </div>
                    <h2 className="text-xl hidden md:block">GatherGram</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal gap-6 font-semibold px-1">
                    {nav}
                </div>
            </div>
            <div className="navbar-end gap-4">
                {
                    isToken ? <button onClick={handleLogout} className="px-4 py-2 text-white font-bold rounded-lg bg-rose-600">Log out</button>
                        :
                        <Link to="/login" className="btn btn-sm btn-ghost rounded-full">Sign in</Link>
                }
                <Link to="/" className="px-6 py-2 bg-black rounded-full text-white font-semibold">Get started</Link>
            </div>
        </div>
    )
}
