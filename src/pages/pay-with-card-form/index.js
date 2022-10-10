import React, { useState } from "react";
import AboutCompanyDonationPage from "../../components/donation-Page/about-company";
import Select from "react-select";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import ThankYouModal from "../thank-you-modal";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        height: 56,
        borderColor: "#E5E7EB",
        borderRadius: 8,
        boxShadow: "none",
        paddingLeft: 4,
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: "#a9a9a9",
    }),
};

const DonationRecievingForm = () => {
    const [showNumber, setShowNumber] = useState(false);
    const [donationAmount, setDonationAmount] = useState(40.0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onOpenModal = () => setIsModalOpen(true);
    const onCloseModal = () => setIsModalOpen(false);
    return (
        <div>
            <AboutCompanyDonationPage />
            <div className="container mx-auto">
                <div className="px-4 w-full lg:w-3/4 py-20 mx-auto">
                    <p className="text-3.5xl leading-12 font-semibold">Pay with Your Card</p>
                    <p className="leading-6 mt-3 text-mutedTextColor">Enter the credit card details for payment</p>

                    <div className="mt-10">
                        <label className="text-sm leading-6 font-semibold">Donation Amount</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                className="w-full h-14 border-1 mt-2 focus:outline-none pl-10 rounded-lg"
                                placeholder="Donation Amount"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                            />
                            <div className="absolute left-3" style={{ top: 25 }}>
                                <p className="font-semibold leading-6">$</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-2xl leading-8 font-semibold">Personal Details</p>
                        <hr className="mt-3" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div>
                                <label className="text-base">First Name</label>
                                <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter First Name" />
                            </div>
                            <div>
                                <label className="text-base">Last Name</label>
                                <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter Last Name" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="text-base">Email Address</label>
                            <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter Email Address" />
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-2xl leading-8 font-semibold">Billing Details</p>
                        <hr className="mt-3" />
                        <div className="mt-6">
                            <label className="text-base">Address Line 1</label>
                            <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter Address Line 1" />
                        </div>
                        <div className="mt-6">
                            <label className="text-base">Address Line 2</label>
                            <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter Address Line 2" />
                        </div>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="">
                                <label className="text-base">City</label>
                                <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter City" />
                            </div>
                            <div className="">
                                <label className="text-base">State</label>
                                <Select options={options} className="mt-2" placeholder="Select State" styles={customStyles} />
                            </div>
                            <div className="">
                                <label className="text-base">Postal Code</label>
                                <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Enter Postal Code" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-2xl leading-8 font-semibold">Card Details</p>
                        <hr className="mt-3" />
                        <div className="mt-6 relative">
                            <label className="text-base">Credit Card Number</label>
                            <input type="text" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 pr-16 rounded-lg" placeholder="XXXX - XXXX - XXXX - XXXX" />
                            <div className="absolute top-12 right-3">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.0373 17.2184H2.65178C2.39123 17.2184 2.17984 17.007 2.17984 16.7464V7.76981H22.2617V8.94966C22.2617 9.27411 22.5272 9.53958 22.8517 9.53958C23.1761 9.53958 23.4416 9.27411 23.4416 8.94966V4.69731C23.4416 3.78785 22.6993 3.04553 21.7898 3.04553H2.65178C1.7374 3.04553 1 3.78785 1 4.69731V16.7464C1 17.6559 1.74232 18.3982 2.65178 18.3982H14.0422C14.3666 18.3982 14.6321 18.1328 14.6321 17.8083C14.6321 17.4838 14.3666 17.2184 14.0373 17.2184ZM2.65178 4.22537H21.7898C22.0503 4.22537 22.2617 4.43676 22.2617 4.69731V6.58997H2.17493V4.69731C2.17493 4.43676 2.39123 4.22537 2.65178 4.22537Z"
                                        fill="#C18742"
                                    />
                                    <path
                                        d="M12.8083 12.15C12.8083 11.8255 12.5428 11.5601 12.2183 11.5601H5.12945C4.80499 11.5601 4.53953 11.8255 4.53953 12.15C4.53953 12.4744 4.80499 12.7399 5.12945 12.7399H12.2183C12.5477 12.7399 12.8083 12.4744 12.8083 12.15Z"
                                        fill="#C18742"
                                    />
                                    <path
                                        d="M5.12945 13.6739C4.80499 13.6739 4.53953 13.9394 4.53953 14.2639C4.53953 14.5883 4.80499 14.8538 5.12945 14.8538H7.96598C8.29044 14.8538 8.5559 14.5883 8.5559 14.2639C8.5559 13.9394 8.29044 13.6739 7.96598 13.6739H5.12945Z"
                                        fill="#C18742"
                                    />
                                    <path
                                        d="M5.06062 10.6014H12.1495C12.474 10.6014 12.7394 10.336 12.7394 10.0115C12.7394 9.68706 12.474 9.42159 12.1495 9.42159H5.06062C4.73617 9.42159 4.4707 9.68706 4.4707 10.0115C4.4707 10.336 4.73125 10.6014 5.06062 10.6014Z"
                                        fill="#C18742"
                                    />
                                    <path
                                        d="M24.4149 14.6621H23.5497V13.2856C23.5497 11.5797 22.1585 10.1885 20.4526 10.1885C18.7468 10.1885 17.3556 11.5797 17.3556 13.2856V14.6621H16.4903C16.1659 14.6621 15.9004 14.9275 15.9004 15.252V20.3646C15.9004 20.6891 16.1659 20.9545 16.4903 20.9545H24.41C24.7345 20.9545 25 20.6891 25 20.3646V15.252C25.0049 14.9226 24.7394 14.6621 24.4149 14.6621ZM18.5354 13.2807C18.5354 12.2237 19.3957 11.3634 20.4526 11.3634C21.5096 11.3634 22.3699 12.2237 22.3699 13.2807V14.6571H18.5354V13.2807ZM23.825 19.7698H17.0803V15.837H23.8201V19.7698H23.825Z"
                                        fill="#C18742"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0.75 4.69731C0.75 3.65026 1.59885 2.79553 2.65178 2.79553H21.7898C22.8373 2.79553 23.6916 3.64978 23.6916 4.69731V8.94966C23.6916 9.41218 23.3142 9.78958 22.8517 9.78958C22.3891 9.78958 22.0117 9.41218 22.0117 8.94966V8.01981H2.42984V16.7464C2.42984 16.8689 2.5293 16.9684 2.65178 16.9684H14.0373C14.5033 16.9684 14.8821 17.3444 14.8821 17.8083C14.8821 18.2708 14.5047 18.6482 14.0422 18.6482H2.65178C1.60425 18.6482 0.75 17.794 0.75 16.7464V4.69731ZM2.65178 3.29553C1.87596 3.29553 1.25 3.92544 1.25 4.69731V16.7464C1.25 17.5178 1.88039 18.1482 2.65178 18.1482H14.0422C14.2286 18.1482 14.3821 17.9947 14.3821 17.8083C14.3821 17.6233 14.2299 17.4684 14.0373 17.4684H2.65178C2.25316 17.4684 1.92984 17.1451 1.92984 16.7464V7.51981H22.5117V8.94966C22.5117 9.13604 22.6653 9.28958 22.8517 9.28958C23.038 9.28958 23.1916 9.13604 23.1916 8.94966V4.69731C23.1916 3.92592 22.5612 3.29553 21.7898 3.29553H2.65178ZM2.65178 4.47537C2.52592 4.47537 2.42493 4.57819 2.42493 4.69731V6.33997H22.0117V4.69731C22.0117 4.57483 21.9123 4.47537 21.7898 4.47537H2.65178ZM1.92493 4.69731C1.92493 4.29534 2.25654 3.97537 2.65178 3.97537H21.7898C22.1884 3.97537 22.5117 4.29869 22.5117 4.69731V6.83997H1.92493V4.69731ZM4.2207 10.0115C4.2207 9.54899 4.59809 9.17159 5.06062 9.17159H12.1495C12.612 9.17159 12.9894 9.54899 12.9894 10.0115C12.9894 10.474 12.612 10.8514 12.1495 10.8514H5.06062C4.59182 10.8514 4.2207 10.4727 4.2207 10.0115ZM5.06062 9.67159C4.87424 9.67159 4.7207 9.82513 4.7207 10.0115C4.7207 10.1993 4.87068 10.3514 5.06062 10.3514H12.1495C12.3359 10.3514 12.4894 10.1979 12.4894 10.0115C12.4894 9.82513 12.3359 9.67159 12.1495 9.67159H5.06062ZM17.1056 13.2856C17.1056 11.4416 18.6087 9.93849 20.4526 9.93849C22.2966 9.93849 23.7997 11.4417 23.7997 13.2856V14.4121H24.4149C24.8747 14.4121 25.2559 14.7822 25.25 15.2536V20.3646C25.25 20.8272 24.8726 21.2045 24.41 21.2045H16.4903C16.0278 21.2045 15.6504 20.8272 15.6504 20.3646V15.252C15.6504 14.7895 16.0278 14.4121 16.4903 14.4121H17.1056V13.2856ZM20.4526 10.4385C18.8849 10.4385 17.6056 11.7178 17.6056 13.2856V14.9121H16.4903C16.304 14.9121 16.1504 15.0656 16.1504 15.252V20.3646C16.1504 20.551 16.304 20.7045 16.4903 20.7045H24.41C24.5964 20.7045 24.75 20.551 24.75 20.3646V15.2482C24.7527 15.0619 24.6034 14.9121 24.4149 14.9121H23.2997V13.2856C23.2997 11.7178 22.0204 10.4385 20.4526 10.4385ZM20.4526 11.6134C19.5338 11.6134 18.7854 12.3618 18.7854 13.2807V14.4071H22.1199V13.2807C22.1199 12.3618 21.3715 11.6134 20.4526 11.6134ZM18.2854 13.2807C18.2854 12.0856 19.2576 11.1134 20.4526 11.1134C21.6477 11.1134 22.6199 12.0856 22.6199 13.2807V14.9071H18.2854V13.2807ZM4.28953 12.15C4.28953 11.6875 4.66692 11.3101 5.12945 11.3101H12.2183C12.6809 11.3101 13.0583 11.6874 13.0583 12.15C13.0583 12.6111 12.6871 12.9899 12.2183 12.9899H5.12945C4.66692 12.9899 4.28953 12.6125 4.28953 12.15ZM5.12945 11.8101C4.94306 11.8101 4.78953 11.9636 4.78953 12.15C4.78953 12.3364 4.94306 12.4899 5.12945 12.4899H12.2183C12.4083 12.4899 12.5583 12.3377 12.5583 12.15C12.5583 11.9636 12.4047 11.8101 12.2183 11.8101H5.12945ZM4.28953 14.2639C4.28953 13.8013 4.66692 13.4239 5.12945 13.4239H7.96598C8.42851 13.4239 8.8059 13.8013 8.8059 14.2639C8.8059 14.7264 8.42851 15.1038 7.96598 15.1038H5.12945C4.66692 15.1038 4.28953 14.7264 4.28953 14.2639ZM5.12945 13.9239C4.94306 13.9239 4.78953 14.0775 4.78953 14.2639C4.78953 14.4502 4.94306 14.6038 5.12945 14.6038H7.96598C8.15237 14.6038 8.3059 14.4502 8.3059 14.2639C8.3059 14.0775 8.15237 13.9239 7.96598 13.9239H5.12945ZM16.8303 15.587H24.0701V19.7698H23.825V20.0198H16.8303V15.587ZM23.5701 19.5198H17.3303V16.087H23.5701V19.5198Z"
                                        fill="#C18742"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <label className="text-base">CVV Number</label>
                                <input type={showNumber ? "text" : "password"} className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 pr-11 rounded-lg" placeholder="Enter CVV Number" />
                                <div className="absolute top-12 right-3 cursor-pointer" onClick={() => setShowNumber((prevState) => !prevState)}>
                                    {showNumber ? <IoIosEye color="#C18742" fontSize={22} /> : <IoIosEyeOff color="#C18742" fontSize={22} />}
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-base">Expiration Date</label>
                                <input type="date" className="w-full h-14 border-1 mt-2 focus:outline-none pl-4 rounded-lg" placeholder="Select Date" />
                            </div>
                        </div>
                    </div>

                    <button className="h-14 w-full flex justify-center items-center bg-primaryColor rounded-lg mt-12" onClick={onOpenModal}>
                        <p className="text-sm leading-6 font-semibold">PAY ${parseFloat(donationAmount)}</p>
                    </button>

                    <p className="text-xs leading-6 text-mutedTextColor text-center mt-10">
                        By paying, you allow Grads Give to use personal information to provide you the content you requested and allow us to assist.
                    </p>
                </div>

                <ThankYouModal open={isModalOpen} onCloseModal={onCloseModal} />
            </div>
        </div>
    );
};

export default DonationRecievingForm;
