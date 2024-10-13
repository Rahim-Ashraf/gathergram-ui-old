import { FaArrowRight } from 'react-icons/fa'
import rectangle2 from '/assets/Rectangle2.png'

export default function WeddingPlan() {
    return (
        <div className="bg-[#FFD0EC] p-16">
            <div className="bg-[#212121] px-16 py-12 rounded-lg flex gap-16 justify-between">
                <div className="space-y-8 text-white w-3/5">
                    <h2 className="text-6xl leading-normal font-medium">Ready to Plan Your Wedding?</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat."</p>
                    <button className="bg-[#FFD0EC] font-bold px-6 py-2 rounded-full text-black flex gap-2 items-center">
                        <span>Create Your Event for Free</span> <FaArrowRight /></button>
                </div>
                <div className='w-2/5'>
                    <img className='rounded-lg w-full' src={rectangle2} alt="" />
                </div>
            </div>
        </div>
    )
}
