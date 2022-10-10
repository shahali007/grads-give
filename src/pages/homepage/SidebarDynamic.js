import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const navbarMenus = [
    {
        navLinkId: "Home",
        scrollToId: "home",
    },
    {
        navLinkId: "Mission",
        scrollToId: "mission",
    },
    {
        navLinkId: "Goals",
        scrollToId: "goals",
    },
    {
        navLinkId: "FAQs",
        scrollToId: "faq",
    },
    {
        navLinkId: "Contact Us",
        scrollToId: "contact",
    },
    {
        navLinkId: "Login",
        scrollToId: "login",
    },
];

const NavLink = ({ navLinkId, scrollToId, key, activeNavLinkId, setActiveNavLinkId, setIsOpen }) => {
    const handleClick = () => {
        setActiveNavLinkId(navLinkId);
        setIsOpen(false);
        document.getElementById(scrollToId).scrollIntoView({
            behavior: "smooth", // gives an ease-in-out effect to our scroll
            top: "0",
        });
    };

    return (
        <>
            <div className="my-8" onClick={handleClick}>
                <p className="font-semibold text-black"> {navLinkId} </p> {navLinkId === activeNavLinkId && <div className="h-1 bg-primaryColor mt-1"> </div>}{" "}
            </div>
        </>
    );
};

const SidebarDynamic = (props) => {
    const { isOpen, sidebarRef, setIsOpen } = props;
    const [activeNavLinkId, setActiveNavLinkId] = React.useState("");

    const testActive = "fixed top-0 left-0 h-screen w-3/4 bg-white transform transition-all duration-500 z-50 overflow-y-scroll pb-8 shadow-2xl lg:hidden";
    const testHidden = "fixed top-0 left-0 h-screen w-0 transform transition-all duration-500 opacity-0 overflow-hidden z-10";

    return (
        <div className={isOpen ? testActive : testHidden} ref={sidebarRef}>
            <div className="mx-6 mt-8">
                <div className="flex justify-between items-center">
                    <div className="company-logo">
                        <svg width="178" height="36" viewBox="0 0 178 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.1314 27.6952L22.8762 31.8599C22.0608 32.4042 21.1019 32.6947 20.1209 32.6947C19.1399 32.6947 18.1811 32.4042 17.3657 31.8599L11.1 27.6952C10.9192 27.5719 10.7157 27.4855 10.5012 27.4411C10.2867 27.3969 10.0655 27.3954 9.85041 27.4371C9.63536 27.4787 9.4307 27.5624 9.24831 27.6834C9.06593 27.8045 8.90943 27.9605 8.7879 28.1424C8.66637 28.3242 8.58222 28.5283 8.54033 28.7428C8.49843 28.9575 8.49962 29.1782 8.54382 29.3922C8.58804 29.6064 8.67438 29.8095 8.79786 29.9901C8.92136 30.1707 9.07952 30.3249 9.26319 30.444L15.5231 34.6086C16.8818 35.5156 18.4797 35.9999 20.1146 35.9999C21.7494 35.9999 23.3474 35.5156 24.7061 34.6086L30.966 30.444C31.1496 30.3249 31.3079 30.1707 31.4313 29.9901C31.5548 29.8095 31.6412 29.6064 31.6853 29.3922C31.7295 29.1782 31.7308 28.9575 31.6889 28.7428C31.6469 28.5283 31.5627 28.3242 31.4412 28.1424C31.3198 27.9605 31.1633 27.8045 30.9809 27.6834C30.7985 27.5624 30.5939 27.4787 30.3788 27.4371C30.1637 27.3954 29.9426 27.3969 29.728 27.4411C29.5135 27.4855 29.3099 27.5719 29.1292 27.6952"
                                fill="#3077B8"
                            />
                            <path
                                d="M39.9804 15.3113V14.203C39.9789 13.7658 39.8037 13.3471 39.4934 13.0385C39.1832 12.73 38.7629 12.5567 38.3249 12.5567H30.0468C29.6078 12.5567 29.1867 12.7308 28.8762 13.0406C28.5657 13.3504 28.3913 13.7706 28.3913 14.2087C28.3913 14.6469 28.5657 15.067 28.8762 15.3768C29.1867 15.6867 29.6078 15.8607 30.0468 15.8607H34.5126L21.0323 24.8223C20.7605 25.0038 20.4408 25.1007 20.1138 25.1007C19.7868 25.1007 19.4672 25.0038 19.1954 24.8223L5.29958 15.5774C5.07287 15.4264 4.887 15.222 4.75844 14.9823C4.62989 14.7426 4.56263 14.4749 4.56263 14.203C4.56263 13.931 4.62989 13.6633 4.75844 13.4236C4.887 13.1838 5.07287 12.9795 5.29958 12.8286L19.1966 3.58364C19.4684 3.40211 19.788 3.3052 20.115 3.3052C20.442 3.3052 20.7617 3.40211 21.0335 3.58364L29.1302 8.96933C29.3109 9.09556 29.5151 9.1845 29.7308 9.23088C29.9463 9.27728 30.1692 9.28018 30.386 9.23944C30.6027 9.1987 30.8093 9.11516 30.9932 8.99367C31.1772 8.8722 31.335 8.71525 31.4573 8.53207C31.5797 8.3489 31.6641 8.14316 31.7055 7.92696C31.7471 7.71076 31.745 7.48847 31.6991 7.27313C31.6533 7.05779 31.565 6.85375 31.439 6.67301C31.3131 6.49225 31.1522 6.33844 30.9659 6.2206L22.8692 0.834911C22.0541 0.290581 21.0953 0 20.1144 0C19.1336 0 18.1749 0.290581 17.3597 0.834911L3.46272 10.0799C2.78213 10.5321 2.22402 11.1452 1.838 11.8644C1.45198 12.5837 1.25 13.387 1.25 14.203C1.25 15.0189 1.45198 15.8222 1.838 16.5414C2.22402 17.2608 2.78213 17.8737 3.46272 18.3261L17.3597 27.571C18.1749 28.1154 19.1336 28.4059 20.1144 28.4059C21.0953 28.4059 22.0541 28.1154 22.8692 27.571L36.6692 18.3906V22.4641C36.6692 22.681 36.7121 22.8958 36.7952 23.0963C36.8784 23.2966 37.0004 23.4789 37.1541 23.6322C37.3079 23.7857 37.4904 23.9073 37.6913 23.9904C37.8921 24.0733 38.1074 24.1161 38.3249 24.1161C38.5422 24.1161 38.7575 24.0733 38.9583 23.9904C39.1592 23.9073 39.3417 23.7857 39.4955 23.6322C39.6492 23.4789 39.7712 23.2966 39.8544 23.0963C39.9375 22.8958 39.9804 22.681 39.9804 22.4641V15.3113Z"
                                fill="#3077B8"
                            />
                            <path
                                d="M67.1752 12.3104L64.88 14.5752C64.2452 13.8539 63.4642 13.2754 62.5883 12.8781C61.7125 12.4809 60.7621 12.274 59.8 12.2712C59.0176 12.2507 58.2391 12.3884 57.5114 12.6758C56.7836 12.9633 56.1217 13.3946 55.5652 13.9439C55.0144 14.4669 54.5783 15.0983 54.2846 15.798C53.9909 16.4979 53.8459 17.2509 53.8588 18.0095C53.8453 18.7928 53.9959 19.5702 54.3008 20.2922C54.6058 21.014 55.0585 21.6644 55.6298 22.2017C56.2058 22.7655 56.8894 23.2083 57.64 23.5035C58.3907 23.7987 59.1931 23.9406 59.9998 23.9204C60.9971 23.9534 61.9838 23.708 62.8492 23.2119C63.679 22.6734 64.33 21.9012 64.7195 20.9931H59.755V17.9391H68.3689L68.392 18.6591C68.3917 20.1545 67.9898 21.6224 67.2283 22.9101C66.5177 24.1839 65.4764 25.2432 64.2137 25.9769C62.8852 26.705 61.3871 27.0693 59.8717 27.0332C58.2136 27.0636 56.5756 26.6669 55.1161 25.8812C53.7265 25.1145 52.5808 23.9738 51.8096 22.5887C51.0047 21.1863 50.5849 19.5968 50.5927 17.9807C50.5618 15.8001 51.3653 13.6899 52.8394 12.08C53.7043 11.101 54.7759 10.3254 55.9769 9.80886C57.1781 9.29235 58.4791 9.04781 59.7862 9.09278C61.2209 9.08181 62.6429 9.36246 63.9656 9.91763C65.1937 10.4802 66.2887 11.2956 67.1786 12.3104"
                                fill="#3077B8"
                            />
                            <path
                                d="M69.9465 13.7192H72.6699V15.3101C72.9219 14.7347 73.3287 14.2403 73.8453 13.8816C74.3198 13.5598 74.8809 13.3891 75.4547 13.392C75.9044 13.4014 76.3461 13.5125 76.7466 13.7169L75.7572 16.446C75.474 16.2855 75.1584 16.1903 74.8335 16.1672C74.5628 16.1877 74.3033 16.2834 74.0841 16.4435C73.865 16.6035 73.695 16.8215 73.5936 17.0727C73.167 18.2064 72.9945 19.4195 73.088 20.6267L73.0994 21.2418V26.3523H69.9453L69.9465 13.7192Z"
                                fill="#3077B8"
                            />
                            <path
                                d="M88.0104 13.9702H91.1865V26.6079H88.0094V25.2716C87.4698 25.8036 86.8376 26.2331 86.1437 26.5388C85.5002 26.8019 84.8105 26.9343 84.1151 26.9282C83.313 26.9312 82.5195 26.7635 81.7877 26.436C81.0558 26.1086 80.4024 25.6292 79.8711 25.0296C78.6725 23.753 78.0287 22.055 78.0804 20.3063C78.0111 18.5435 78.6323 16.823 79.8122 15.5093C80.3372 14.9135 80.985 14.4379 81.7115 14.1152C82.4378 13.7925 83.2254 13.6302 84.0204 13.6395C84.7556 13.6348 85.4838 13.7811 86.1597 14.0692C86.8536 14.3752 87.4811 14.813 88.007 15.3584L88.0104 13.9702ZM84.6693 16.5714C84.2108 16.5599 83.7551 16.6463 83.3328 16.8252C82.9107 17.004 82.5318 17.271 82.2216 17.6082C81.5885 18.3593 81.2427 19.3101 81.2459 20.2916C81.249 21.2732 81.6009 22.2216 82.239 22.9686C82.5468 23.3085 82.9239 23.5787 83.3451 23.7609C83.7663 23.943 84.2219 24.0332 84.6809 24.0251C85.1445 24.0375 85.6056 23.9516 86.0336 23.7728C86.4615 23.5941 86.8466 23.3267 87.1631 22.9883C87.8388 22.2458 88.1933 21.2669 88.149 20.2649C88.1703 19.7765 88.0941 19.2888 87.9249 18.8303C87.7557 18.3716 87.4967 17.9511 87.1631 17.5932C86.8424 17.2581 86.4546 16.994 86.025 16.818C85.5954 16.6419 85.1336 16.5579 84.6693 16.5714Z"
                                fill="#3077B8"
                            />
                            <path
                                d="M103.751 9.09156H106.928V26.6022H103.751V25.2717C103.211 25.8037 102.579 26.2332 101.885 26.5389C101.241 26.8021 100.552 26.9344 99.8564 26.9283C99.0544 26.9313 98.2609 26.7636 97.529 26.4361C96.797 26.1088 96.1436 25.6293 95.6123 25.0297C94.4138 23.7531 93.77 22.0551 93.8216 20.3064C93.7523 18.5436 94.3733 16.8231 95.5535 15.5094C96.0784 14.9136 96.7264 14.438 97.4527 14.1153C98.179 13.7926 98.9666 13.6303 99.7618 13.6397C100.497 13.635 101.225 13.7812 101.901 14.0694C102.595 14.3754 103.222 14.8132 103.748 15.3585L103.751 9.09156ZM100.409 16.5715C99.9509 16.56 99.4952 16.6464 99.073 16.8253C98.6509 17.0041 98.2718 17.2711 97.9618 17.6085C97.3286 18.3595 96.9827 19.3102 96.986 20.2918C96.9892 21.2733 97.3411 22.2219 97.9792 22.9687C98.287 23.3086 98.6641 23.5788 99.0853 23.761C99.5065 23.9433 99.962 24.0333 100.421 24.0252C100.885 24.0376 101.346 23.9517 101.774 23.773C102.202 23.5942 102.587 23.3268 102.903 22.9884C103.579 22.2459 103.933 21.267 103.889 20.265C103.91 19.7767 103.834 19.2891 103.665 18.8304C103.496 18.3718 103.237 17.9512 102.903 17.5935C102.583 17.2582 102.195 16.9941 101.765 16.8181C101.336 16.642 100.874 16.558 100.409 16.5715Z"
                                fill="#3077B8"
                            />
                            <path
                                d="M117.893 15.7362L115.93 17.6946C115.384 17.0347 114.604 16.6105 113.753 16.5103C113.456 16.4943 113.161 16.5751 112.914 16.7407C112.822 16.8027 112.745 16.8866 112.693 16.9848C112.64 17.0831 112.612 17.1927 112.612 17.3042C112.614 17.4794 112.682 17.6473 112.804 17.7741C113.087 18.018 113.408 18.2159 113.753 18.3606L114.916 18.9366C115.889 19.3486 116.754 19.9795 117.443 20.7798C117.972 21.5421 118.208 22.4696 118.106 23.3915C118.004 24.3134 117.572 25.1676 116.889 25.7969C115.967 26.5826 114.777 26.9857 113.566 26.9235C112.708 26.949 111.857 26.7656 111.086 26.3892C110.316 26.0128 109.649 25.4549 109.143 24.7635L111.098 22.638C111.465 23.0673 111.909 23.424 112.408 23.6898C112.812 23.9293 113.27 24.0669 113.74 24.0907C114.102 24.1083 114.459 24.0018 114.752 23.7888C114.866 23.7118 114.961 23.6091 115.027 23.4889C115.094 23.3689 115.132 23.2349 115.137 23.0976C115.137 22.61 114.675 22.1339 113.751 21.6692L112.681 21.1345C110.633 20.1046 109.609 18.8156 109.608 17.2673C109.604 16.7825 109.704 16.3026 109.904 15.8604C110.103 15.4183 110.396 15.0246 110.762 14.7063C111.575 13.9823 112.637 13.6011 113.725 13.643C114.536 13.639 115.335 13.8264 116.06 14.1898C116.784 14.5531 117.411 15.0822 117.892 15.7339"
                                fill="#3077B8"
                            />
                            <path
                                d="M141.116 12.31L138.821 14.5749C138.186 13.8534 137.405 13.2749 136.529 12.8777C135.653 12.4805 134.703 12.2736 133.741 12.2709C132.958 12.2504 132.18 12.388 131.452 12.6755C130.724 12.963 130.062 13.3943 129.506 13.9436C128.955 14.4666 128.519 15.098 128.225 15.7977C127.931 16.4975 127.787 17.2505 127.799 18.009C127.786 18.7926 127.936 19.5702 128.241 20.2923C128.546 21.0144 128.999 21.6651 129.57 22.2024C130.146 22.7676 130.829 23.2118 131.579 23.5085C132.33 23.805 133.132 23.9483 133.939 23.9293C134.937 23.9622 135.923 23.7168 136.788 23.2208C137.618 22.6823 138.269 21.9101 138.659 21.002H133.694V17.9388H142.308L142.331 18.6588C142.331 20.1542 141.929 21.6219 141.168 22.9098C140.457 24.1836 139.416 25.2429 138.153 25.9764C136.824 26.7045 135.326 27.069 133.811 27.0329C132.153 27.0633 130.515 26.6666 129.056 25.8809C127.666 25.1142 126.52 23.9733 125.749 22.5884C124.944 21.1859 124.524 19.5963 124.532 17.9802C124.501 15.7998 125.305 13.6896 126.779 12.0796C127.643 11.1023 128.713 10.3278 129.912 9.81177C131.112 9.29571 132.411 9.05085 133.716 9.09473C135.151 9.08378 136.573 9.36443 137.896 9.91958C139.124 10.4822 140.219 11.2976 141.109 12.3123"
                                fill="#3077B8"
                            />
                            <path
                                d="M146.22 8.76649C146.488 8.76331 146.753 8.8154 147 8.91948C147.246 9.02357 147.469 9.17739 147.653 9.37131C147.847 9.56202 148 9.79005 148.103 10.0416C148.205 10.2931 148.256 10.5628 148.251 10.8344C148.256 11.1028 148.205 11.3694 148.104 11.6179C148.002 11.8664 147.85 12.0917 147.659 12.2802C147.477 12.4719 147.257 12.624 147.013 12.7268C146.769 12.8297 146.507 12.8812 146.242 12.8781C145.972 12.8821 145.704 12.8299 145.455 12.725C145.206 12.6201 144.982 12.4647 144.797 12.2686C144.602 12.0747 144.449 11.8436 144.347 11.5892C144.244 11.3349 144.193 11.0625 144.199 10.7883C144.198 10.2531 144.41 9.73953 144.789 9.36044C145.167 8.98134 145.682 8.76771 146.218 8.76649H146.22ZM144.629 13.9702H147.808V26.6079H144.629V13.9702Z"
                                fill="#3077B8"
                            />
                            <path d="M149.34 13.9702H152.573L155.771 21.4272L158.964 13.9702H162.185L156.795 26.6079H154.734L149.34 13.9702Z" fill="#3077B8" />
                            <path
                                d="M176.735 21.2073H166.526C166.639 22.0434 167.06 22.8074 167.708 23.3501C168.403 23.8991 169.271 24.1815 170.158 24.1461C170.725 24.1544 171.289 24.0486 171.815 23.835C172.34 23.6216 172.819 23.3046 173.219 22.9031L175.897 24.1577C175.291 25.0497 174.464 25.7717 173.498 26.2544C172.459 26.7302 171.325 26.9627 170.182 26.934C169.288 26.9679 168.397 26.8191 167.563 26.4966C166.729 26.174 165.97 25.6847 165.332 25.0586C164.716 24.4442 164.231 23.7105 163.91 22.9026C163.588 22.0947 163.435 21.2298 163.459 20.3606C163.43 19.4763 163.579 18.5952 163.898 17.7698C164.218 16.9443 164.699 16.1913 165.317 15.5556C165.922 14.93 166.651 14.4371 167.458 14.1083C168.265 13.7794 169.13 13.6218 170.002 13.6455C170.902 13.6108 171.797 13.7626 172.636 14.0913C173.473 14.4201 174.233 14.9187 174.868 15.5556C175.502 16.229 175.996 17.0226 176.317 17.8896C176.639 18.7565 176.783 19.679 176.741 20.6025L176.735 21.2073ZM173.558 18.7121C173.353 18.0143 172.915 17.4077 172.315 16.9932C171.688 16.5488 170.933 16.3166 170.164 16.3308C169.327 16.3158 168.506 16.577 167.833 17.0739C167.315 17.5161 166.915 18.0788 166.666 18.7121H173.558Z"
                                fill="#3077B8"
                            />
                        </svg>
                    </div>
                    <ImCross size={25} color="#d6bb4e" onClick={() => setIsOpen(false)} />
                </div>

                <div className="flex mt-8 items-center justify-between">
                    <div className="navbar-menus">
                        {/* {navbarMenus.map((menu, index) => (
                            <div className="my-8" key={index}>
                                <p className="font-semibold text-black">{menu.name}</p>
                                {menu.name === "Home" && <div className="h-1 bg-primaryColor mt-1"></div>}
                            </div>
                        ))} */}
                        {navbarMenus.map(({ navLinkId, scrollToId }, index) => (
                            <NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} activeNavLinkId={activeNavLinkId} setActiveNavLinkId={setActiveNavLinkId} setIsOpen={setIsOpen} />
                        ))}

                        <Link to="/donation" className="w-35 h-12 bg-primaryColor flex items-center justify-center rounded-lg font-semibold text-sm">
                            DONATE NOW
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarDynamic;
