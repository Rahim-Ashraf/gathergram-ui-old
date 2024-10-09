import recangle from '../../assets/Rectangle.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

export default function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-20 py-20">
      <div className="col-span-1 space-y-8">
        <h1 className="text-6xl font-bold">“Plan, Share, and Celebrate Your Big Day in One Place”</h1>
        <p>“Create unforgettable memories with a personalized wedding platform for you and your guests.”</p>
        <div className='flex gap-2'>
          <input type="text" name="" placeholder='Enter your email address' className='input bg-gray-100 rounded-full' />
          <button className='py-2 px-6 bg-[#EB44B2] rounded-full text-white font-semibold'>Get started</button>
        </div>
        <div className='flex items-center'>
          <div className='w-12 h-12 rounded-full'><img src={user1} alt="" /></div>
          <div className='w-12 h-12 rounded-full -ml-5'><img src={user2} alt="" /></div>
          <div className='w-12 h-12 rounded-full -ml-5'><img src={user3} alt="" /></div>
          <div className='w-12 h-12 rounded-full -ml-5'><img src={user4} alt="" /></div>
          <div className='w-12 h-12 border-2 border-white rounded-full bg-cyan-400 -ml-5 flex items-center justify-center font-semibold'>+2k</div>
          <p className='pl-4'>+2K People Joined!</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className='py-4 px-24'>
          <img className='w-full' src={recangle} alt="Hero" />
        </div>
      </div>
    </div>
  )
}
