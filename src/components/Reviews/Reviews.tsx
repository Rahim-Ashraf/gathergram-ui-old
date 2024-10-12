import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Review from '../Reusables/Review'

export default function Reviews() {
    const swiper = useSwiper();

    return (
        <div className="bg-pink-50 p-20">
            <div className="flex justify-between items-start gap-4">
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
                    slidesPerView={4}
                >
                    <SwiperSlide>
                        <Review bgUrl={"./assets/review-bg1.png"} name="Alisa Hester" title="PM, Hourglass" agency="Web Design Agency" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review bgUrl={"./assets/review-bg2.png"} name="Rich Wilson" title="COO, Command+R" agency="Web Development Agency" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review bgUrl={"./assets/review-bg3.png"} name="Annie Stanley" title="Designer, Catalog" agency="UX Agency" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review bgUrl={"./assets/review-bg4.png"} name="Johnny Bell" title="PM, Sisyphus" agency="Machine Learning" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review bgUrl={"./assets/review-bg5.png"} name="Mia Ward" title="Fullstack Dev, Quotient" agency="Performance Marketing" />
                    </SwiperSlide>
                    <div className='pt-4'>
                        <button onClick={() => swiper.slidePrev()} className='btn btn-primary'>prev</button>
                        <button onClick={() => swiper.slideNext()} className='btn btn-primary'>next</button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
