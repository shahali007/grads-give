import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi"


import LeaderImage from "./leader-image.png"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    console.log("manto", onClick)
    return (
        <div
            className={className}
            style={{
                ...style,
                height: 36,
                width: 36,
                background: "#D6BB4E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#999999",
            }}
            onClick={onClick}
        >
            <div style={{ fontSize: 23 }} className="custom-arrow-icon-div-left">
                <HiOutlineArrowNarrowRight color='white' />
            </div>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log("hello", onClick)
    return (
        <div
            className={className}
            style={{
                ...style,
                height: 36,
                width: 36,
                background: "#D6BB4E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#999999",
            }}
            onClick={onClick}
        >
            <div style={{ fontSize: 23 }} className="custom-arrow-icon-div">
                <HiOutlineArrowNarrowLeft color='white' />
            </div>
        </div>
    );
}

function SampleSMNextArrow(props) {
    const { className, style, onClick } = props;
    console.log("hello", onClick)
    return (
        <div
            className={`leader-slick-next ${className}`}
            style={{
                ...style,
                height: 36,
                width: 36,
                background: "#D6BB4E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#999999",
                left:'10px!important'
            }}
            onClick={onClick}
        >
            <div style={{ fontSize: 23 }} className="custom-arrow-icon-div sm">
                <HiOutlineArrowNarrowRight color='white' />
            </div>
        </div>
    );
}

function SampleSMPrevArrow(props) {
    const { className, style, onClick } = props;
    console.log("hello", onClick)
    return (
        <div
            className={`leader-slick-left ${className}`}
            style={{
                ...style,
                height: 36,
                width: 36,
                background: "#D6BB4E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#999999",
                left:'10px!important'
            }}
            onClick={onClick}
        >
            <div style={{ fontSize: 23 }} className="custom-arrow-icon-div sm">
                <HiOutlineArrowNarrowLeft color='white' />
            </div>
        </div>
    );
}

const BoardOfLeaders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 610,
                settings: {
                    arrows: true,
                    nextArrow: <SampleSMNextArrow />,
                    prevArrow: <SampleSMPrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    nextArrow: <SampleSMNextArrow />,
                    prevArrow: <SampleSMPrevArrow />,
                },
            },
            {
                breakpoint: 340,
                settings: {
                    arrows: true,
                    nextArrow: <SampleSMNextArrow />,
                    prevArrow: <SampleSMPrevArrow />,
                },
            },
        ]
    };
    return (
        <div className="container mx-auto">
            <div className='px-4 w-full min-h-174 py-4 lg:pt-20 lg:pb-12'>
                <p className='text-3.5xl lg:text-5xl font-bold leading-16'>Board of leaders</p>
                <p className='text-mutedTextColor mt-4 leading-8'>Our leaders speaking up about the issues that matter. </p>

                <Slider {...settings} className="mt-12">
                    <div>
                        <div className='min-h-94.5 w-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center'>
                            <div className='h-full sm:w-74.5 mb-3 w-full shrink-0'>
                                <img src={LeaderImage} alt="leader" className='object-contain w-full h-full' />
                            </div>
                            <div className='ml-0 lg:ml-18 w-full lg:w-164'>
                                <p className='text-3.5xl font-bold'>Betsy DeVos</p>
                                <p className='font-semibold text-mutedTextColor mt-3'>American politician & Philanthropist</p>
                                <p className='mt-6'>Elisabeth Dee DeVos is an American politician, philanthropist, and former government official who served as the 11th United States secretary of education from 2017 to 2021. DeVos is known for her support for school choice, school voucher programs, and charter schools.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='min-h-94.5 w-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center'>
                            <div className='h-full sm:w-74.5 w-full shrink-0'>
                                <img src={LeaderImage} alt="leader" className='object-contain w-full h-full' />
                            </div>
                            <div className='ml-0 lg:ml-18 w-full lg:w-164'>
                                <p className='text-3.5xl font-bold'>Argha</p>
                                <p className='font-semibold text-mutedTextColor mt-3'>American politician & Philanthropist</p>
                                <p className='mt-6'>Elisabeth Dee DeVos is an American politician, philanthropist, and former government official who served as the 11th United States secretary of education from 2017 to 2021. DeVos is known for her support for school choice, school voucher programs, and charter schools.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default BoardOfLeaders