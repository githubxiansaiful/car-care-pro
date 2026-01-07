"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="slide-bg">
                            <img src="/assets/images/banner/1.jpg" alt="Slide" />
                        </div>
                        <div className="slide-content">
                            <h2>Professional Car Care You Can Trust</h2>
                            <p>From routine maintenance to advanced repairs, Car Care Pro connects you with expert mechanics to keep your vehicle running smoothly—without the hassle.</p>
                            <div className="slide-page-button">
                                <Link href="/services" className="btn btn-primary">Our Services</Link>
                                <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="slide-bg">
                            <img src="/assets/images/banner/3.jpg" alt="Slide" />
                        </div>
                        <div className="slide-content">
                            <h2>Professional Car Care You Can Trust</h2>
                            <p>From routine maintenance to advanced repairs, Car Care Pro connects you with expert mechanics to keep your vehicle running smoothly—without the hassle.</p>
                            <div className="slide-page-button">
                                <Link href="/services" className="btn btn-primary">Our Services</Link>
                                <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="slide-bg">
                            <img src="/assets/images/banner/2.jpg" alt="Slide" />
                        </div>
                        <div className="slide-content">
                            <h2>Professional Car Care You Can Trust</h2>
                            <p>From routine maintenance to advanced repairs, Car Care Pro connects you with expert mechanics to keep your vehicle running smoothly—without the hassle.</p>
                            <div className="slide-page-button">
                                <Link href="/services" className="btn btn-primary">Our Services</Link>
                                <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default HeroBanner;