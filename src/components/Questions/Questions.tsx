import featuredIcon1 from '/assets/Featured-icon1.png';
import featuredIcon2 from '/assets/Featured-icon2.png';
import featuredIcon3 from '/assets/Featured-icon3.png';
import featuredIcon4 from '/assets/Featured-icon4.png';
import featuredIcon5 from '/assets/Featured-icon5.png';
import featuredIcon6 from '/assets/Featured-icon6.png';
import avatarGroup from '/assets/Avatar-group.png';

export default function Questions() {
    return (
        <div className="max-w-screen-lg mx-auto py-12">
            <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
            <p className="text-center">Everything you need to know about the product and billing.</p>
            <div className="grid grid-cols-3 gap-4 py-8">
                <div className="col-span-3 md:col-span-1 space-y-2 p-4 text-center">
                    <div className="w-8 mx-auto">
                        <img src={featuredIcon1} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Is there a free trial available?</h4>
                    <p className="font-semibold">Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.</p>
                </div>
                <div className="col-span-3 md:col-span-1 space-y-2 p-4 text-center">
                    <div className="w-8 mx-auto">
                        <img src={featuredIcon2} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Can I change my plan later?</h4>
                    <p className="font-semibold">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                </div>
                <div className="col-span-3 md:col-span-1 space-y-2 p-4 text-center">
                    <div className="w-8 mx-auto">
                        <img src={featuredIcon3} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">What is your cancellation policy?</h4>
                    <p className="font-semibold">We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                </div>
                <div className="col-span-3 md:col-span-1 space-y-2 p-4 text-center">
                    <div className="w-8 mx-auto">
                        <img src={featuredIcon4} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">Can other info be added to an invoice?</h4>
                    <p className="font-semibold">At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.</p>
                </div>
                <div className="col-span-3 md:col-span-1 space-y-2 p-4 text-center">
                    <div className="w-8 mx-auto">
                        <img src={featuredIcon5} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">How does billing work?</h4>
                    <p className="font-semibold">Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</p>
                </div>
                <div className="col-span-3 md:col-span-1 space-y-2 p-4 text-center">
                    <div className="w-8 mx-auto">
                        <img src={featuredIcon6} alt="Icon" />
                    </div>
                    <h4 className="text-xl font-bold">How do I change my account email?</h4>
                    <p className="font-semibold">You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
                </div>
            </div>
            <div className="bg-pink-50 rounded-lg py-8 text-center space-y-4">
                <div className="w-16 mx-auto">
                    <img src={avatarGroup} alt="Icon" />
                </div>
                <h4 className="text-xl font-bold">Is there a free trial available?</h4>
                <p className="font-semibold">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className="bg-[#F5169C] px-4 py-2 rounded text-white font-bold">Get in touch</button>
            </div>
        </div>
    )
}
