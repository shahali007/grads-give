import React from "react";

const CompanyMission = () => {
    const missionData = [
        {
            heading: "Alleviate the 150B funding gap",
            description: "Launching national fundraisers to solve major causes",
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1500_629)">
                        <path
                            d="M44.3333 21H21C18.4227 21 16.3333 23.0893 16.3333 25.6667V39.6667C16.3333 42.244 18.4227 44.3333 21 44.3333H44.3333C46.9107 44.3333 49 42.244 49 39.6667V25.6667C49 23.0893 46.9107 21 44.3333 21Z"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M32.6667 37.3333C35.244 37.3333 37.3333 35.244 37.3333 32.6667C37.3333 30.0893 35.244 28 32.6667 28C30.0893 28 28 30.0893 28 32.6667C28 35.244 30.0893 37.3333 32.6667 37.3333Z"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M39.6667 21.0001V16.3334C39.6667 15.0957 39.175 13.9088 38.2998 13.0336C37.4247 12.1584 36.2377 11.6667 35 11.6667H11.6667C10.429 11.6667 9.242 12.1584 8.36683 13.0336C7.49167 13.9088 7 15.0957 7 16.3334V30.3334C7 31.5711 7.49167 32.7581 8.36683 33.6332C9.242 34.5084 10.429 35.0001 11.6667 35.0001H16.3333"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1500_629">
                            <rect width="56" height="56" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            heading: "Deliver tools to school that help",
            description: "Deploying tools that empower teachers & students",
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_473)">
                        <path
                            d="M51.3334 21.0001L28 11.6667L4.66669 21.0001L28 30.3334L51.3334 21.0001ZM51.3334 21.0001V35.0001"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14 24.7336V37.3336C14 39.1902 15.475 40.9706 18.1005 42.2834C20.726 43.5961 24.287 44.3336 28 44.3336C31.713 44.3336 35.274 43.5961 37.8995 42.2834C40.525 40.9706 42 39.1902 42 37.3336V24.7336"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_473">
                            <rect width="56" height="56" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            heading: "Solve Ongoing Education Issues",
            description: "Providing schools with database & community management systems.",
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_487)">
                        <path
                            d="M7 44.3337C10.1924 42.4906 13.8137 41.5203 17.5 41.5203C21.1863 41.5203 24.8076 42.4906 28 44.3337C31.1924 42.4906 34.8137 41.5203 38.5 41.5203C42.1863 41.5203 45.8076 42.4906 49 44.3337"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M7 14.0005C10.1924 12.1573 13.8137 11.187 17.5 11.187C21.1863 11.187 24.8076 12.1573 28 14.0005C31.1924 12.1573 34.8137 11.187 38.5 11.187C42.1863 11.187 45.8076 12.1573 49 14.0005"
                            stroke="white"
                            stroke-width="4.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M7 14V44.3333" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28 14V44.3333" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M49 14V44.3333" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_487">
                            <rect width="56" height="56" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
    ];
    return (
        <div className="pt-8" id="mission">
            <div className="bg-lightBlueSectionBackground">
                <div className="container mx-auto">
                    <div className="min-h-158.25 px-4 bg-lightBlueSectionBackground lg:py-20">
                        <p className="text-3.5xl lg:text-5xl font-bold leading-16 text-center mb-27">Our Mission</p>
                        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-20 md:gap-16 lg:gap-0 lg:flex lg:justify-between">
                            {missionData.map((mission, index) => (
                                <div className="w-full lg:w-100 h-75.25 px-8 py-14 flex flex-col justify-end relative rounded-2xl bg-white mission-card">
                                    <p className="text-2xl font-bold leading-8 mb-8 text-center">{mission.heading}</p>
                                    <p className="leading-6 text-center">{mission.description}</p>

                                    <div className="h-30 w-30 absolute -top-15 -translate-x-2/4 left-2/4 rounded-full flex justify-center items-center bg-primaryColor mission-icon-div">
                                        {mission.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyMission;
