import chat from '/assets/chat-icon.png'
import massege from '/assets/massege-icon.png'
import location from '/assets/location-icon.png'
import phone from '/assets/phone-icon.png'

export default function ContactUs() {
    return (
        <div className="py-16 max-w-screen-lg mx-auto space-y-4">
            <h6 className="font-bold text-[#F5169C]">Contact us</h6>
            <h4 className="text-xl font-bold">We'd love to hear from you</h4>
            <p className='pb-2'>Our friendly team is always here to chat.</p>
            <div className="flex gap-6">
                <div className="space-y-2 px-4 py-4 bg-pink-50">
                    <div className="w-12 pb-8">
                        <img src={chat} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Chat to sales</h4>
                    <p>Speak to our friendly team.</p>
                    <p className='font-semibold'>sales@GatherGram.com</p>
                </div>
                <div className="space-y-2 px-4 py-4 bg-pink-50">
                    <div className="w-12 pb-8">
                        <img src={massege} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Chat to support</h4>
                    <p>We’re here to help.</p>
                    <p className='font-semibold'>support@GatherGram.com</p>
                </div>
                <div className="space-y-2 px-4 py-4 bg-pink-50">
                    <div className="w-12 pb-8">
                        <img src={location} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Visit us</h4>
                    <p>Visit our office HQ.</p>
                    <p className='font-semibold'>100 Smith Street <br />
                        Collingwood VIC 3066 AU</p>
                </div>
                <div className="space-y-2 px-4 py-4 bg-pink-50">
                    <div className="w-12 pb-8">
                        <img src={phone} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Call us</h4>
                    <p>Mon-Fri from 8am to 5pm.</p>
                    <p className='font-semibold'>+1 (555) 000-0000</p>
                </div>
            </div>
        </div>
    )
}
