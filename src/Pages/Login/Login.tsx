import loginImage from '../../assets/login-pic.png'
import loginLogo from '../../assets/login-logo.png'
import google from '../../assets/google-icon.png'
import facebook from '../../assets/facebook-icon.png'
import apple from '../../assets/apple-icon.png'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="grid grid-cols-2 max-w-screen-xl mx-auto">
            <div className='relative'>
                <img src={loginImage} alt="" />
                <div className='absolute bg-[#F5169C20] w-full h-full top-0'></div>
            </div>
            <div className='py-12 px-16'>
                <div className='flex justify-center'>
                    <img src={loginLogo} alt="" />
                </div>
                <h2 className='text-3xl font-bold pb-2 mt-20'>Get Started </h2>
                <p className='pb-4'>Enter your email address below to login to existing account or <br />
                    sign up with new account.</p>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold">Email Address</span>
                        </label>
                        <input type="email" placeholder="Enter email" className="input input-bordered" required />
                    </div>
                    <div className="form-control pt-4 pb-2">
                        <label className="label">
                            <span className="font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#F5169C] w-full rounded-lg p-4 text-white font-bold">Get Started</button>
                    </div>
                </form>
                <div className="divider max-w-40 mx-auto py-8">or</div>
                <div className='flex justify-between gap-2'>
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
