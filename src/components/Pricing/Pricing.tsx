import Feature from '../Reusables/Feature'

export default function Pricing() {
    return (
        <div className="py-16 max-w-screen-xl mx-auto">
            <div className="space-y-4">
                <h6 className="text-purple-600 text-center">Pricing</h6>
                <h2 className="text-3xl font-bold text-center">Plans that fit your scale</h2>
                <p className="text-center">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                <div className="bg-gray-100 flex justify-center gap-6 items-center max-w-max mx-auto p-2 rounded-lg font-semibold">
                    <button className="bg-white px-4 py-2 rounded-lg">Monthly billing</button>
                    <h6>Annual billing</h6>
                    <button className="bg-gray-200 px-4 rounded-full">Save 20%</button>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="shadow-xl rounded-lg border">
                        <div className="flex justify-between items-center py-4 px-6">
                            <div>
                                <h4 className="text-xl font-bold">Basic plan</h4>
                                <p>Our most popular plan for small teams.</p>
                            </div>
                            <div className="flex items-end">
                                <h2 className="text-xl font-bold flex">
                                    <span>$</span><span className="text-4xl">0</span>
                                </h2>
                                <p>per month</p>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 py-4">
                            <h5 className="font-bold">FEATURES</h5>
                            <p>Everything in our <span className="font-bold">free plan.</span></p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-4">
                                <Feature text={"Access to basic features"} />
                                <Feature text={"Attend events"} />
                                <Feature text={"Basic reporting + analytics"} />
                                <Feature text={"Automatic updates"} />
                                <Feature text={"Up to 10 individual users"} />
                                <Feature text={"Backup your account"} />
                                <Feature text={"20GB individual data"} />
                                <Feature text={"Audit log and notes"} />
                                <Feature text={"Basic chat support"} />
                                <Feature text={"Feature requests"} />
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 py-4">
                            <button className="w-full bg-[#EB44B2] px-4 py-2 text-white font-bold rounded-lg">Get started</button>
                        </div>
                    </div>
                    <div className="shadow-xl rounded-lg border">
                        <div className="flex justify-between items-center py-4 px-6">
                            <div>
                                <h4 className="text-xl font-bold">Business plan <span className='text-sm text-purple-600 bg-purple-50 px-4 py-1 rounded-full font-semibold'>Popular</span></h4>
                                <p>Advanced features and reporting.</p>
                            </div>
                            <div className="flex items-end">
                                <h2 className="text-xl font-bold flex">
                                    <span>$</span><span className="text-4xl">20</span>
                                </h2>
                                <p>per month</p>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 py-4">
                            <h5 className="font-bold">FEATURES</h5>
                            <p>Everything in our <span className="font-bold">basic plan</span> plus....</p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-4">
                                <Feature text={"200+ integrations"} />
                                <Feature text={"Advanced custom fields"} />
                                <Feature text={"Advanced reporting"} />
                                <Feature text={"Audit log and data history"} />
                                <Feature text={"Up to 20 individual users"} />
                                <Feature text={"Backup your account"} />
                                <Feature text={"40GB individual data"} />
                                <Feature text={"Personalised service"} />
                                <Feature text={"Priority chat support"} />
                                <Feature text={"+ many more..."} />
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 py-4">
                            <button className="w-full bg-[#EB44B2] px-4 py-2 text-white font-bold rounded-lg">Get started</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
