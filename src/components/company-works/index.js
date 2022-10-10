import React from "react";
import { Link } from "react-router-dom";
import SectionBackground from "./what_we_do.png";

const CompanyWorks = () => {
    const works = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_535)">
                        <path
                            d="M15 18.3333C18.6819 18.3333 21.6667 15.3486 21.6667 11.6667C21.6667 7.98477 18.6819 5 15 5C11.3181 5 8.33334 7.98477 8.33334 11.6667C8.33334 15.3486 11.3181 18.3333 15 18.3333Z"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 35V31.6667C5 29.8986 5.70238 28.2029 6.95262 26.9526C8.20286 25.7024 9.89856 25 11.6667 25H18.3333C20.1014 25 21.7971 25.7024 23.0474 26.9526C24.2976 28.2029 25 29.8986 25 31.6667V35"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M26.6667 5.21655C28.1007 5.58372 29.3717 6.41772 30.2794 7.58707C31.1871 8.75642 31.6797 10.1946 31.6797 11.6749C31.6797 13.1552 31.1871 14.5934 30.2794 15.7627C29.3717 16.9321 28.1007 17.7661 26.6667 18.1332"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M35 34.9998V31.6664C34.9915 30.195 34.4965 28.7678 33.5921 27.6071C32.6877 26.4464 31.4247 25.6176 30 25.2498"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_535">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            heading: "Funds to pay teachers",
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_548)">
                        <path
                            d="M13.3333 6.66675H9.99998C9.07951 6.66675 8.33331 7.41294 8.33331 8.33341V31.6667C8.33331 32.5872 9.07951 33.3334 9.99998 33.3334H13.3333C14.2538 33.3334 15 32.5872 15 31.6667V8.33341C15 7.41294 14.2538 6.66675 13.3333 6.66675Z"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M20 6.66675H16.6667C15.7462 6.66675 15 7.41294 15 8.33341V31.6667C15 32.5872 15.7462 33.3334 16.6667 33.3334H20C20.9205 33.3334 21.6667 32.5872 21.6667 31.6667V8.33341C21.6667 7.41294 20.9205 6.66675 20 6.66675Z"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M8.33331 13.3333H15" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 26.6667H21.6667" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M23.0049 7.59999L26.6449 6.71666C27.5816 6.49166 28.5333 7.03332 28.7816 7.93666L34.9399 30.3C35.0486 30.7094 35.0005 31.1446 34.805 31.5204C34.6096 31.8962 34.2809 32.1855 33.8833 32.3317L33.6616 32.4L30.0216 33.2833C29.0849 33.5083 28.1333 32.9667 27.8849 32.0633L21.7266 9.69999C21.618 9.29057 21.6661 8.85534 21.8615 8.47954C22.057 8.10375 22.3857 7.81445 22.7833 7.66832L23.0049 7.59999V7.59999Z"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M23.3333 14.9999L30 13.3333" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.6667 26.6668L33.205 25.0334" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_548">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            heading: "School Supplies",
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_564)">
                        <path
                            d="M31.6667 25V35H30V30M13.3334 6.66667V35M8.33337 6.66667V11.6667C8.33337 12.9927 8.86016 14.2645 9.79784 15.2022C10.7355 16.1399 12.0073 16.6667 13.3334 16.6667C14.6595 16.6667 15.9312 16.1399 16.8689 15.2022C17.8066 14.2645 18.3334 12.9927 18.3334 11.6667V6.66667M31.6667 5V25H23.3334C23.295 18.865 23.64 12.6567 31.6667 5Z"
                            stroke="#6F4025"
                            stroke-width="3.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_564">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            heading: "Meals",
        },
    ];
    return (
        <div className="py-8" id="goals" style={{ background: `url(${SectionBackground})`, backgroundSize:'cover' }}>
            <div className="container mx-auto">
                <div className="px-4 min-h-152 py-4 lg:pt-20 lg:pb-12">
                    <div className="flex justify-center">
                        <p className="text-3.5xl lg:text-5xl text-white font-bold lg:leading-16 text-center w-181.75">What we are doing to make the changes</p>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-8 lg:flex lg:justify-between mt-12">
                        {works.map((work, index) => (
                            <div className="w-full lg:w-100 h-68 bg-white hover:bg-primaryColor rounded-2xl p-8 flex flex-col items-center company-work" key={index}>
                                <div className="w-20 h-20 rounded-2xl flex justify-center items-center company-work-icon-div">{work.icon}</div>
                                <p className="text-2xl font-bold leading-8 mt-6">{work.heading}</p>
                                <Link to="/donation" className="w-full h-12 flex justify-center items-center mt-6 border-2 border-primaryColor rounded-lg company-work-donate-now-button">
                                    <p className="text-xm font-semibold leading-6">Donate Now</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyWorks;
