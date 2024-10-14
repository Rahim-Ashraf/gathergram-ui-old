import loginImage from '/assets/login-pic.png'
import google from '/assets/google-icon.png'
import facebook from '/assets/facebook-icon.png'
import apple from '/assets/apple-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";

import { useState } from 'react'
import { IoMdEyeOff } from 'react-icons/io'
import { FaEye } from 'react-icons/fa'
import axios from 'axios'
import Swal from 'sweetalert2'

type Inputs = {
    email: string,
    fullName: string,
    country: string,
    phoneNumber: string,
    password: string,
};

export default function Signup() {
    const [country, setCountry] = useState("CA");
    const [showPass, setShowPass] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        data.country = country;

        axios.post("https://jellyfish-app-sjgrf.ondigitalocean.app/auth/register", data)
            .then(res => {
                if (res.data) {
                    localStorage.removeItem("accessToken"); //it should add on logout button
                    localStorage.setItem("accessToken", res.data.data.accessToken);

                    Swal.fire({
                        title: `Welcome ${data.fullName}`,
                        confirmButtonText: "Go to Portal",
                    }).then(() => {
                        navigate("/");
                    });
                }
            })
            .catch(err => {
                console.error(err.response);
                if (err.response.status === 409) {
                    Swal.fire(err.response.data.message);
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
                <div className='bg-pink-50 p-4 rounded-lg border border-gray-400'>
                    <h4 className='text-[#F5169C] text-xl font-bold pb-4'>Welcome! Please tell us a bit about yourself</h4>

                    <input type="radio" name='userType' value="eventOrganizer" id='eventOrganizer' className='accent-[#F5169C]' />
                    <label htmlFor="eventOrganizer" className='font-semibold pl-2'>I am event organizer</label>
                    <br />

                    <input type="radio" name='userType' value="brideGrom" id='brideGrom' className='accent-[#F5169C]' />
                    <label htmlFor="brideGrom" className='font-semibold pl-2'>I am Bride/Grom</label>
                </div>
                <h2 className='text-3xl font-bold pb-2 mt-20'>Signup</h2>
                <p className='pb-4'>Enter your details below to signup or sign in with existing account</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold">Email Address</span>
                        </label>
                        <input placeholder='Enter your email'
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: 'Invalid email format'
                                }
                            })} className="input input-bordered w-full" />
                        {errors.email && <span className='text-rose-600'>
                            {errors.email.message || "This field is required"}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold">Full Name</span>
                        </label>
                        <input placeholder='Enter your full name' {...register("fullName", {
                            required: "Name is required",
                            minLength: {
                                value: 4,
                                message: "Name must be at least 4 char",
                            },
                        })} className="input input-bordered w-full" />
                        {errors.fullName && <span className='text-rose-600'>
                            {errors.fullName.message}</span>}
                    </div>
                    <div className="form-control pt-4 pb-2">
                        <label className="label">
                            <span className="font-bold">Region</span>
                        </label>
                        <ReactFlagsSelect
                            selected={country}
                            onSelect={(code) => setCountry(code)}
                        />
                    </div>
                    <div className="form-control pt-4 pb-2">
                        <label className="label">
                            <span className="font-bold">Mobile Number</span>
                        </label>
                        <input
                            {...register("phoneNumber", {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\(?([2-9][0-9]{2})\)?[-.● ]?([2-9][0-9]{2})[-.● ]?([0-9]{4})$/,
                                    message: 'Invalid phone number format',
                                }
                            })}
                            type='text'
                            placeholder="Enter phone number"
                            className="input input-bordered" />
                        {errors.phoneNumber && <span className='text-rose-600'>
                            {errors.phoneNumber.message}</span>}
                    </div>
                    <div className="form-control pt-4 pb-2">
                        <label>
                            <span className="font-bold">Password</span>
                            <p className='pb-1'>Must be at least 6 characters</p>
                        </label>

                        <div className="relative">
                            <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-4">{showPass ? <FaEye className="cursor-pointer w-10" /> : <IoMdEyeOff className="cursor-pointer w-10" />}</span>
                            <input
                                {...register("password", {
                                    required: 'Password is required',
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message: 'At least 8 chars, 1 capital, 1 symbol and 1 number'
                                    }
                                })}
                                type={showPass ? "password" : "text"}
                                placeholder="Enter password"
                                className="input input-bordered w-full" />
                        </div>
                        {errors.password && <span className='text-rose-600'>
                            {errors.password.message}</span>}

                    </div>
                    <div className="form-control pt-4 pb-2">
                        <h6>
                            By signing up, I agree to the <Link to="#" className='text-[#247FAF] underline'>terms and conditions</Link> and have read the <Link to="#" className='text-[#247FAF] underline'>privacy policy</Link>
                        </h6>
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' value="Sign up" className="bg-[#F5169C] w-full rounded-lg p-4 text-white font-bold" />
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
                <p className='py-8 text-center font-semibold'>Already have an account? <Link to="/login" className='text-[#7E0C65] font-bold'>Sign in</Link></p>
            </div>
        </div>
    )
}
