import loginImage from '/assets/login-pic.png'
import loginLogo from '/assets/login-logo.png'
import google from '/assets/google-icon.png'
import facebook from '/assets/facebook-icon.png'
import apple from '/assets/apple-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from 'react-icons/io'
import { jwtDecode } from "jwt-decode";

type Inputs = {
    email: string,
    password: string,
};

type DecodedToken = {
    email: string
    event: string
    exp: number
    iat: number
    sub: string
}

export default function Login() {
    const [showPass, setShowPass] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        axios.post("https://jellyfish-app-sjgrf.ondigitalocean.app/auth/login", data)
            .then(res => {
                if (res.data.data) {
                    localStorage.removeItem("accessToken"); //it should add on logout button
                    localStorage.setItem("accessToken", res.data.data.accessToken);
                    const decoded: DecodedToken = jwtDecode(res.data.data.accessToken);
                    console.log(decoded)

                    Swal.fire({
                        title: `Welcome ${decoded.email}`,
                        confirmButtonText: "Go to Portal",
                    }).then(() => {
                        navigate("/");
                    });
                }
            })
            .catch(err => {
                console.error(err)
                if (err.response.status === 401) {
                    Swal.fire({
                        title: err.response.data.message,
                        confirmButtonText: "Try again",
                    });
                }
            })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
            <div className='relative'>
                <img src={loginImage} alt="" />
                <div className='absolute bg-[#F5169C20] w-full h-full top-0'></div>
            </div>
            <div className='py-12 px-8 md:px-16'>
                <div className='flex justify-center'>
                    <img src={loginLogo} alt="" />
                </div>
                <h2 className='text-3xl font-bold pb-2 mt-20'>Get Started </h2>
                <p className='pb-4'>Enter your email address below to login to existing account or <br />
                    sign up with new account.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold">Email Address</span>
                        </label>
                        <input placeholder='Enter your email'
                            {...register("email", {
                                required: "Email is required",
                            })} className="input input-bordered w-full" />
                        {errors.email && <span className='text-rose-600'>
                            {errors.email.message}</span>}
                    </div>
                    <div className="form-control pt-4 pb-2">
                        <label className="label">
                            <span className="font-bold">Password</span>
                        </label>
                        <div className="relative">
                            <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-4">{showPass ? <FaEye className="cursor-pointer w-10" /> : <IoMdEyeOff className="cursor-pointer w-10" />}</span>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type={showPass ? "password" : "text"}
                                placeholder="Enter password"
                                className="input input-bordered w-full" />
                            {errors.password &&
                                <span className='text-rose-600'>{errors.password.message}</span>}
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#F5169C] w-full rounded-lg p-4 text-white font-bold">Get Started</button>
                    </div>
                </form>
                <div className="divider max-w-40 mx-auto py-8">or</div>
                <div className='flex flex-wrap justify-between gap-2'>
                    <button className='flex gap-4 items-center px-8 py-4 rounded-lg border-2 border-gray-400 font-bold'>
                        <div className='w-4'><img src={google} alt="" /></div>
                        <span>Google</span>
                    </button>
                    <button className='flex gap-4 items-center px-8 py-4 rounded-lg border-2 border-gray-400 font-bold'>
                        <div className='w-4'><img src={facebook} alt="" /></div>
                        <span>Facebook</span>
                    </button>
                    <button className='flex gap-4 items-center px-8 py-4 rounded-lg border-2 border-gray-400 font-bold'>
                        <div className='w-4'><img src={apple} alt="" /></div>
                        <span>Apple</span>
                    </button>
                </div>
                <p className='py-8 text-center font-semibold'>Don't have an account? <Link to="/signup" className='text-[#7E0C65] font-bold'>Sign up</Link></p>
            </div>
        </div>
    )
}
