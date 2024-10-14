import React from 'react';
import developer from '../../assets/images/hero/developer.svg';
import developer_dark from '../../assets/images/hero/developer-dark.svg';
import { FiArrowDownCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function Hero() {
    const themeMode = useSelector((state) => state.theme.themeMode)
    return (
        <div id='aboutme' className='relative overflow-hidden bg-theme_bg min-h-[550px] sm:min-h-[650px] flex items-center'>
            {/* Background pattern */}
            <div className='h-[700px] w-[700px] bg-secondary_light absolute -top-1/2 right-0 rounded-3xl rotate-45'></div>

            {/* Hero section */}
            <div className='container pb-8 sm:pb-0 mt-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Text content section */}
                    <div className="flex flex-col justify-center items-center sm:items-start pt-12 pl-6 pr-6 gap-3 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme_fg_copy"
                        >
                            Hi I Am Ziya Kasgari
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className="text-2xl text-theme_bg_copy"
                        >
                            A Full-Stack Developer & Design Enthusiast A Full-Stack Developer & Design Enthusiast A Full-Stack Developer & Design Enthusiast
                        </p>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                            className='mt-4 shadow-md'
                        >
                            <button
                                className="flex items-center gap-2 text-md sm:text-xl bg-primary hover:scale-105 duration-200 text-primary_content py-3 px-4 sm:py-4 sm:px-6 rounded-md  hover:bg-primary_dark"
                            >
                                <FiArrowDownCircle className=" text-xl sm:text-2xl" />
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="order-2 sm:order-1">
                        <div
                            data-aos="zoom-in"
                            data-aos-once="true"
                            className="relative z-10 sm:pt-0 pt-8"
                        >
                            <img
                                src={themeMode === 'dark' ? developer : developer_dark}
                                alt=""
                                className="w-[400px] h-[400px] sm:h-[650px] sm:w-[650px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
