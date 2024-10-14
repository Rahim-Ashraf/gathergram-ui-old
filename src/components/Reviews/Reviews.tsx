import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import star from '/assets/Star.png'

export default function Reviews() {
    const swiper = useSwiper();

    return (
        <div className="bg-pink-50 p-8 md:p-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                    <h4 className='text-2xl font-bold pb-4'>Don't just take our word for it</h4>
                    <p>Hear from some of our amazing customers who are building faster.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-white font-semibold rounded-lg border">Our customers</button>
                    <button className="px-4 py-2 bg-[#F5169C] text-white font-semibold rounded-lg">Create account</button>
                </div>
            </div>
            <div className='py-12'>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop
                    spaceBetween={40}
                    breakpoints={{
                        940: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className={`p-3 text-white bg-[url('/assets/review-bg1.png')] bg-cover h-80 flex justify-center items-end`}>
                            <div className='backdrop-blur border border-gray-200 p-3 w-full bg-[#4c412b20]'>
                                <div className='flex gap-1 items-center'>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                </div>
                                <h4 className='text-xl font-bold'>Alisa Hester</h4>
                                <h6 className='font-bold'>PM, Hourglass</h6>
                                <h6>Web Design Agency</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`p-3 text-white bg-[url('/assets/review-bg2.png')] bg-cover h-80 flex justify-center items-end`}>
                            <div className='backdrop-blur border border-gray-200 p-3 w-full bg-[#4c412b20]'>
                                <div className='flex gap-1 items-center'>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                </div>
                                <h4 className='text-xl font-bold'>Rich Wilson</h4>
                                <h6 className='font-bold'>COO, Command+R</h6>
                                <h6>Web Development Agency</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`p-3 text-white bg-[url('/assets/review-bg3.png')] bg-cover h-80 flex justify-center items-end`}>
                            <div className='backdrop-blur border border-gray-200 p-3 w-full bg-[#4c412b20]'>
                                <div className='flex gap-1 items-center'>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                </div>
                                <h4 className='text-xl font-bold'>Annie Stanley</h4>
                                <h6 className='font-bold'>Designer, Catalog</h6>
                                <h6>UX Agency</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`p-3 text-white bg-[url('/assets/review-bg4.png')] bg-cover h-80 flex justify-center items-end`}>
                            <div className='backdrop-blur border border-gray-200 p-3 w-full bg-[#4c412b20]'>
                                <div className='flex gap-1 items-center'>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                </div>
                                <h4 className='text-xl font-bold'>Johnny Bell</h4>
                                <h6 className='font-bold'>PM, Sisyphus</h6>
                                <h6>Machine Learning</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`p-3 text-white bg-[url('/assets/review-bg5.png')] bg-cover h-80 flex justify-center items-end`}>
                            <div className='backdrop-blur border border-gray-200 p-3 w-full bg-[#4c412b20]'>
                                <div className='flex gap-1 items-center'>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                    <div className='w-4'><img src={star} alt="" /></div>
                                </div>
                                <h4 className='text-xl font-bold'>Mia Ward</h4>
                                <h6 className='font-bold'>Fullstack Dev, Quotient</h6>
                                <h6>Performance Marketing</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className='pt-4 flex gap-4'>
                        <button onClick={() => swiper.slidePrev()} className='p-4 bg-white rounded-full'><FaArrowLeft /></button>
                        <button onClick={() => swiper.slideNext()} className='p-4 bg-white rounded-full'><FaArrowRight /></button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
