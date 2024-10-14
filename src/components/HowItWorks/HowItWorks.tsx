

export default function HowItWorks() {
    return (
        <div className="bg-[#212121] text-white py-16">
            <h2 className="text-3xl font-bold text-center">How It works</h2>
            <p className="text-center pb-2">"Easily create and manage your wedding events, from the ceremony to the <br /> reception.”</p>
            <div className="bg-[url('/assets/Vector.png')] py-20 bg-cover">
                <div className="max-w-screen-xl mx-auto bg-[#212121] grid grid-cols-4 gap-4 text-black">
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 space-y-2 px-6 py-8 bg-[#FDFDFD] hover:bg-pink-200 rounded-lg">
                        <div className="w-8">
                            <img src="" alt="Icon" />
                        </div>
                        <h4 className="text-xl">Sign Up</h4>
                        <p>“Create your free account and get started in minutes.”</p>
                    </div>
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 space-y-2 px-6 py-8 bg-[#FDFDFD] hover:bg-pink-200 rounded-lg">
                        <div className="w-8">
                            <img src="" alt="Icon" />
                        </div>
                        <h4 className="text-xl">Positive Reviews</h4>
                        <p>Turpis nasceturvel malesuada enim eget eget.</p>
                    </div>
                    <div className=" col-span-4 md:col-span-2 lg:col-span-1 space-y-2 px-6 py-8 bg-[#FDFDFD] hover:bg-pink-200 rounded-lg">
                        <div className="w-8">
                            <img src="" alt="Icon" />
                        </div>
                        <h4 className="text-xl">Regular Users</h4>
                        <p>Scale your workload without waiting for hte engineering team.</p>
                    </div>
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 space-y-2 px-6 py-8 bg-[#FDFDFD] hover:bg-pink-200 rounded-lg">
                        <div className="w-8">
                            <img src="" alt="Icon" />
                        </div>
                        <h4 className="text-xl">Team Members</h4>
                        <p>Turpis nasceturvel malesuada enim eget eget.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
