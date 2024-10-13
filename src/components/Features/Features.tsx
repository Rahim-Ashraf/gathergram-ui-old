import service1 from "/assets/service1.png";
import service2 from "/assets/service2.png";
import service3 from "/assets/service3.png";
import service4 from "/assets/service4.png";

export default function Features() {
    return (
        <div className="py-16">
            <h2 className="text-3xl text-center font-bold">Our Features</h2>
            <p className="text-center pb-12">"Easily create and manage your wedding events, from the ceremony to the <br /> reception.”</p>
            <div className="max-w-screen-xl mx-auto bg-[#212121] grid grid-cols-4 text-white">
                <div className="space-y-4 px-6 pb-6 pt-24 hover:bg-pink-200 hover:text-black">
                    <div className="w-8">
                        <img src={service1} alt="" />
                    </div>
                    <h4 className="text-xl font-bold">Event Management</h4>
                    <p>Increased conversion and expension on new markets Dynamic business devolopment.</p>
                </div>
                <div className="space-y-4 px-6 pb-6 pt-24 hover:bg-pink-200 hover:text-black">
                    <div className="w-8">
                        <img src={service2} alt="" />
                    </div>
                    <h4 className="text-xl font-bold">Guest Interaction</h4>
                    <p>Excute pay outs & refunds
                        straight to your customer`s bank account via Finpay. Increase satisfaction and retention.</p>
                </div>
                <div className="space-y-4 px-6 pb-6 pt-24 hover:bg-pink-200 hover:text-black">
                    <div className="w-8">
                        <img src={service3} alt="" />
                    </div>
                    <h4 className="text-xl font-bold">Donate & Contribute</h4>
                    <p>No cards or payment details insertation, no additional registration or app download by your customer`s.</p>
                </div>
                <div className="space-y-4 px-6 pb-6 pt-24 hover:bg-pink-200 hover:text-black">
                    <div className="w-8">
                        <img src={service4} alt="" />
                    </div>
                    <h4 className="text-xl font-bold">Custom Love Story Page</h4>
                    <p>Personal informations is encrypted and protected by industry standard banking security.</p>
                </div>
            </div>
        </div>
    )
}
