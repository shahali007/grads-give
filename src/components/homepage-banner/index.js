import React, { useState } from "react";
import _ from "lodash";
import SafetyReliefLogo from "./safety-relief.png";
import FoodReliefLogo from "./food-relief.png";
import MentalHealthReliefLogo from "./mental-health-relief.png";
import Overlay from "./Overlay.png";
import { Link } from "react-router-dom";

const HomePageBanner = () => {
    const [bannerTypes, setBannerTypes] = useState([
        {
            name: "Food Relief",
            description: "Fight against student Hunger. Text will go here.",
            icon: (
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.2" clipPath="url(#clip0_1361_507)">
                        <path
                            d="M10.6671 8H32.0004L29.3337 32H13.3337L10.6671 8Z"
                            stroke="#2E1708"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.6671 48H24.0004V56H18.6671V48Z"
                            stroke="#2E1708"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M53.3334 8V40H40.0001C39.9388 30.184 40.4908 20.2507 53.3334 8Z"
                            stroke="#2E1708"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M53.3337 40V56H50.6671V48"
                            stroke="#2E1708"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21.3329 32V48"
                            stroke="#2E1708"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1361_507">
                            <rect width="64" height="64" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            selected: true,
            bannerHeading: "Fight against student Hunger",
            bannerDescription:
                "Congress cut $11B child nutrition waiver program, ending subsidized lunches for millions of students. Help feed millions of hungry children that rely on meal programs for daily nutrition.",
        },
        {
            name: "Safety Relief",
            description: "Stop gun deaths in schools. Text will go here.",
            icon: (
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.2" clipPath="url(#clip0_1361_498)">
                        <path
                            d="M32.0002 8C38.2291 13.5109 46.3588 16.3802 54.6669 16C55.8765 20.1147 56.2466 24.4306 55.7552 28.6912C55.2639 32.9517 53.9211 37.0701 51.8067 40.8014C49.6922 44.5328 46.8493 47.801 43.4468 50.4119C40.0443 53.0229 36.1517 54.9232 32.0002 56C27.8488 54.9232 23.9562 53.0229 20.5537 50.4119C17.1512 47.801 14.3083 44.5328 12.1938 40.8014C10.0794 37.0701 8.73661 32.9517 8.24525 28.6912C7.7539 24.4306 8.124 20.1147 9.33358 16C17.6417 16.3802 25.7714 13.5109 32.0002 8Z"
                            stroke="#6F4025"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1361_498">
                            <rect width="64" height="64" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            selected: false,
            bannerHeading: "Stop gun deaths in schools",
            bannerDescription:
                "Firearms are now the leading cause of death among children. A distressing frequency that alarms students, parents and teachers. Help schools add a range of new high-tech security measures without diverting funds from other education needs. ",
        },
        {
            name: "Mental Health Relief",
            description:
                "Youth Mental Health is in Crisis. More text goes here. ",
            icon: (
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.2" clipPath="url(#clip0_1361_488)">
                        <path
                            d="M31.9994 21.3333C35.6813 21.3333 38.6661 18.3486 38.6661 14.6667C38.6661 10.9848 35.6813 8 31.9994 8C28.3175 8 25.3328 10.9848 25.3328 14.6667C25.3328 18.3486 28.3175 21.3333 31.9994 21.3333Z"
                            stroke="#6F4025"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M32.0005 56.9812L45.5871 43.3919C46.3599 42.6291 46.9742 41.7209 47.3946 40.7197C47.815 39.7185 48.0333 38.6441 48.0368 37.5582C48.0403 36.4723 47.829 35.3965 47.4151 34.3926C47.0012 33.3887 46.3928 32.4766 45.6249 31.7088C44.8571 30.9409 43.945 30.3325 42.9411 29.9186C41.9372 29.5047 40.8614 29.2934 39.7755 29.2969C38.6896 29.3004 37.6152 29.5187 36.614 29.9391C35.6128 30.3595 34.7046 30.9738 33.9418 31.7466L32.0005 33.6852L30.0591 31.7466C29.2963 30.9738 28.3881 30.3595 27.3869 29.9391C26.3858 29.5187 25.3113 29.3004 24.2254 29.2969C23.1396 29.2934 22.0637 29.5047 21.0598 29.9186C20.0559 30.3325 19.1438 30.9409 18.376 31.7088C17.6082 32.4766 16.9998 33.3887 16.5858 34.3926C16.1719 35.3965 15.9606 36.4723 15.9642 37.5582C15.9677 38.6441 16.1859 39.7185 16.6063 40.7197C17.0267 41.7209 17.641 42.6291 18.4138 43.3919L32.0005 56.9812V56.9812Z"
                            stroke="#6F4025"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1361_488">
                            <rect width="64" height="64" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            selected: false,
            bannerHeading: "Youth Mental Health is in Crisis",
            bannerDescription:
                "Student mental health has reached crisis levels. Districts across the country are desperate to hire more mental health specialists, roll out new coping tools and expanding curriculum that prioritizes emotional health.",
        },
    ]);

    const [selectedBanner, setSelectedBanner] = useState({
        name: "Food Relief",
        bannerHeading: "Fight against student Hunger",
        bannerDescription:
            "Congress cut $11B child nutrition waiver program, ending subsidized lunches for millions of students. Help feed millions of hungry children that rely on meal programs for daily nutrition.",
    });

    const handleBannerSelection = (clickedBanner) => {
        const tempBannerTypes = _.cloneDeep(bannerTypes);
        const updatedTempBanner = tempBannerTypes.map((banner) => {
            if (banner.name === clickedBanner.name) {
                banner.selected = true;
                setSelectedBanner({
                    name: banner.name,
                    bannerHeading: banner.bannerHeading,
                    bannerDescription: banner.bannerDescription,
                });
            } else {
                banner.selected = false;
            }
            return banner;
        });
        setBannerTypes(updatedTempBanner);
    };


    return (
        <div className="min-h-220">
            <div className="banner-image w-full h-174 relative overflow-hidden">
                {selectedBanner.name === "Food Relief" && (
                    <img
                        src={FoodReliefLogo}
                        className="h-full w-full object-cover"
                        alt="banner-logo"
                    />
                )}
                {selectedBanner.name === "Safety Relief" && (
                    <img
                        src={SafetyReliefLogo}
                        className="h-full w-full object-cover"
                        alt="banner-logo"
                    />
                )}
                {selectedBanner.name === "Mental Health Relief" && (
                    <img
                        src={MentalHealthReliefLogo}
                        className="h-full w-full object-cover"
                        alt="banner-logo"
                    />
                )}
                <div className="sm:block flex flex-col h-full justify-center w-full sm:w-64 lg:w-152 absolute top-10 px-4 left-0 sm:left-1/5 lg:top-49 lg:left-26 z-10">
                    <p className="text-4xl lg:text-6.5xl lg:leading-[5.5rem] font-bold text-white">
                        {selectedBanner.bannerHeading}
                    </p>
                    <p className="mt-6 text-white">
                        {selectedBanner.bannerDescription}
                    </p>
                    <div className="flex mt-10 items-center">
                        <Link
                            to="/donation"
                            className="w-40 h-12 flex justify-center items-center bg-primaryColor rounded-lg text-sm font-semibold mr-7"
                        >
                            DONATE NOW
                        </Link>
                        {selectedBanner.name === "Food Relief" && (
                            <div className="flex">
                                <svg
                                    className="mr-2"
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.4971 7.34873 19.4426 4.80688 17.5679 2.93215C15.6931 1.05742 13.1513 0.0029116 10.5 0ZM10.5 18C8.91775 18 7.37104 17.5308 6.05544 16.6518C4.73985 15.7727 3.71447 14.5233 3.10897 13.0615C2.50347 11.5997 2.34504 9.99113 2.65372 8.43928C2.9624 6.88743 3.72433 5.46197 4.84315 4.34315C5.96197 3.22433 7.38743 2.4624 8.93928 2.15372C10.4911 1.84504 12.0997 2.00346 13.5615 2.60896C15.0233 3.21447 16.2727 4.23984 17.1518 5.55544C18.0308 6.87103 18.5 8.41775 18.5 10C18.4976 12.121 17.654 14.1544 16.1542 15.6542C14.6545 17.154 12.621 17.9976 10.5 18Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M7.5 4.44598V15.554L16.387 9.99998L7.5 4.44598ZM9.5 8.05398L12.613 9.99998L9.5 11.946V8.05398Z"
                                        fill="white"
                                    />
                                </svg>
                                <p className="text-sm font-semibold text-white">
                                    How can I help?
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <img
                    src={Overlay}
                    alt="overlay"
                    className="absolute h-full w-full opacity-100 top-0"
                />
            </div>

            <div className="flex">
                {bannerTypes.map((banner, index) => (
                    <div
                        className={`w-1/3 h-46 p-4 lg:p-10 flex justify-center items-center flex-col-reverse sm:block cursor-pointer ${
                            banner.selected
                                ? "bg-primaryColor"
                                : "bg-secondaryColor"
                        } border-r-1`}
                        key={index}
                        onClick={() => handleBannerSelection(banner)}
                    >
                        <p className="font-bold text-xl sm:text-2xl text-center sm:text-left">
                            {banner.name}
                        </p>
                        <div className="mt-2 flex justify-between items-center">
                            <p className="hidden lg:block">
                                {banner.description}
                            </p>
                            <div className="lg:block">{banner.icon}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePageBanner;
