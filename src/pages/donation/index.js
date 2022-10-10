import React, { useEffect, useState } from 'react'
import AboutCompanyDonationPage from '../../components/donation-Page/about-company'
import _ from "lodash"
import { BsGoogle } from "react-icons/bs"
import { Link } from 'react-router-dom'

const DonationPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [donationType, setDonationType] = useState([
        {
            name: "National Fund",
            selected: true
        },
        {
            name: "Country Fund",
            selected: false
        }
    ])
    const [selectedDonationType, setSelectedDonationType] = useState("National Fund")

    const handleDonationType = donationtype => {
        const tempDonationTypes = _.cloneDeep(donationType)
        const updatedDonationTypes = tempDonationTypes.map(donation => {
            if (donation.name === donationtype.name) {
                donation.selected = true
                setSelectedDonationType(donation.name)
            } else {
                donation.selected = false
            }
            return donation
        })
        setDonationType(updatedDonationTypes)
    }

    const [countryList, setCountryList] = useState([
        {
            name: "Birmingham-Hoover, AL Metropolitan Statistical Area",
            selected: false
        },
        {
            name: "Anniston-Oxford-Jacksonville, AL Metropolitan Statistical Area",
            selected: false
        }
    ])

    const handleCountrySelection = clickedCountry => {
        const tempCountryList = _.cloneDeep(countryList)
        const updatedCountryList = tempCountryList.map(country => {
            if (country.name === clickedCountry.name) {
                country.selected = true
            } else {
                country.selected = false
            }
            return country
        })
        setCountryList(updatedCountryList)
    }

    const [donationFrequency, setDonationFrequency] = useState([
        {
            name: "One Time",
            selected: true
        },
        {
            name: "Monthly",
            selected: false
        }
    ])

    const handleDonationFrequency = clickedFrequency => {
        const tempDonationFrequency = _.cloneDeep(donationFrequency)
        const updatedDonationFrequency = tempDonationFrequency.map(frequency => {
            if (frequency.name === clickedFrequency.name) {
                frequency.selected = true
            } else {
                frequency.selected = false
            }
            return frequency
        })
        setDonationFrequency(updatedDonationFrequency)
    }

    const [donationAmount, setDonationAmount] = useState([
        {
            name: "$10",
            selected: true
        },
        {
            name: "$50",
            selected: false
        },
        {
            name: "$150",
            selected: false
        },
        {
            name: "$500",
            selected: false
        },
        {
            name: "$1000",
            selected: false
        },
        {
            name: "Other",
            selected: false
        },
    ])

    const [selectedAmount, setSelectedAmount] = useState("$10")

    const handleDonationAmount = clickedAmount => {
        const tempDonationAmount = _.cloneDeep(donationAmount)
        const updatedDonationAmount = tempDonationAmount.map(amount => {
            if (amount.name === clickedAmount.name) {
                amount.selected = true
                setSelectedAmount(amount.name)
            } else {
                amount.selected = false
            }
            return amount
        })
        setDonationAmount(updatedDonationAmount)
    }

    const [supportTypes, setSupportTypes] = useState([
        {
            name: "Food Relief",
            description: "Lorem ipsum dolor sit amet, consectetur.",
            selected: false,
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1004_1100)">
                    <path d="M5.3335 4H16.0002L14.6668 16H6.66683L5.3335 4Z" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.3335 24H12.0002V28H9.3335V24Z" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.6666 4V20H19.9999C19.9692 15.092 20.2452 10.1253 26.6666 4Z" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.6668 20V28H25.3335V24" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.6665 16V24" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1004_1100">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
        },
        {
            name: "Safety Relief",
            description: "Lorem ipsum dolor sit amet, consectetur.",
            selected: false,
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1004_1113)">
                    <path d="M15.9999 4C19.1144 6.75543 23.1792 8.19009 27.3333 8C27.9381 10.0574 28.1231 12.2153 27.8774 14.3456C27.6318 16.4759 26.9604 18.535 25.9031 20.4007C24.8459 22.2664 23.4245 23.9005 21.7232 25.206C20.022 26.5114 18.0757 27.4616 15.9999 28C13.9242 27.4616 11.9779 26.5114 10.2767 25.206C8.57542 23.9005 7.15395 22.2664 6.09674 20.4007C5.03952 18.535 4.36812 16.4759 4.12244 14.3456C3.87676 12.2153 4.06182 10.0574 4.66661 8C8.82065 8.19009 12.8855 6.75543 15.9999 4" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1004_1113">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
        },
        {
            name: 'Mental Health Relief',
            description: "Lorem ipsum dolor sit amet, consectetur.",
            selected: false,
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1004_1122)">
                    <path d="M15.9998 10.6667C17.8408 10.6667 19.3332 9.17428 19.3332 7.33333C19.3332 5.49238 17.8408 4 15.9998 4C14.1589 4 12.6665 5.49238 12.6665 7.33333C12.6665 9.17428 14.1589 10.6667 15.9998 10.6667Z" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.0001 28.4906L22.7934 21.6959C23.1798 21.3145 23.487 20.8604 23.6972 20.3599C23.9074 19.8593 24.0165 19.322 24.0183 18.7791C24.02 18.2362 23.9144 17.6982 23.7074 17.1963C23.5005 16.6943 23.1963 16.2383 22.8123 15.8544C22.4284 15.4705 21.9724 15.1663 21.4704 14.9593C20.9685 14.7523 20.4306 14.6467 19.8876 14.6485C19.3447 14.6502 18.8075 14.7593 18.3069 14.9695C17.8063 15.1798 17.3522 15.4869 16.9708 15.8733L16.0001 16.8426L15.0294 15.8733C14.648 15.4869 14.1939 15.1798 13.6934 14.9695C13.1928 14.7593 12.6555 14.6502 12.1126 14.6485C11.5697 14.6467 11.0317 14.7523 10.5298 14.9593C10.0278 15.1663 9.57179 15.4705 9.18787 15.8544C8.80396 16.2383 8.49976 16.6943 8.2928 17.1963C8.08584 17.6982 7.9802 18.2362 7.98196 18.7791C7.98371 19.322 8.09283 19.8593 8.30304 20.3599C8.51325 20.8604 8.82039 21.3145 9.20678 21.6959L16.0001 28.4906V28.4906Z" stroke="#6F4025" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1004_1122">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
    ])

    const handleSupportTypes = clickedSupport => {
        const tempSupportTypes = _.cloneDeep(supportTypes)
        const updatedSupportTypes = tempSupportTypes.map(support => {
            if (support.name === clickedSupport.name) {
                support.selected = true
            } else {
                support.selected = false
            }
            return support
        })
        setSupportTypes(updatedSupportTypes)
    }

    return (
        <div className="container mx-auto">
            <AboutCompanyDonationPage />

            <div className='px-4 w-full lg:w-3/4 py-20 mx-auto'>

                <p className='text-2xl font-bold leading-8'>I want to donate</p>
                <p className='leading-6 mt-8'>Donate to</p>
                <div className='flex mt-4'>
                    {
                        donationType.map((type, index) => (
                            <div className={`px-6 py-3 mr-3 rounded-large cursor-pointer ${type.selected ? "bg-primaryColor" : "bg-secondaryColor"}`} key={index} onClick={() => handleDonationType(type)}>
                                <span className='leading-6 font-semibold'>{type.name}</span>
                            </div>
                        ))
                    }
                </div>
                {
                    selectedDonationType === "Country Fund" && (
                        <div className='mt-8'>
                            <input type="text" className='w-full h-14 border-1 mt-2 focus:outline-none px-4 rounded-lg' placeholder='Type in City of Zip Code' />
                            {
                                countryList.map((country, index) => (
                                    <div className='w-full h-22 px-6 flex justify-between items-center bg-lightBlueSectionBackground mt-6 rounded-lg' key={index}>
                                        <p className='font-semibold leading-6'>{country.name}</p>
                                        <button className={`w-40 h-12 flex justify-center items-center border-1 border-primaryColor rounded-lg ${country.selected ? "bg-primaryColor" : ""}`} onClick={() => handleCountrySelection(country)}>
                                            {
                                                country.selected ? (
                                                    <div className='flex'>
                                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.4999 16.2L5.2999 12L3.8999 13.4L9.4999 19L21.4999 6.99998L20.0999 5.59998L9.4999 16.2Z" fill="#2E1708" />
                                                        </svg>
                                                        <p className='text-sm font-semibold leading-6 ml-2'>SELECTED</p>
                                                    </div>
                                                ) : (
                                                    <p className='text-sm font-semibold leading-6'>SELECT COUNTRY</p>
                                                )
                                            }
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }


                <p className='leading-6 mt-8'>Frequency</p>
                <div className='flex mt-4'>
                    {
                        donationFrequency.map((frequency, index) => (
                            <div className={`px-6 py-3 mr-3 rounded-large cursor-pointer ${frequency.selected ? "bg-primaryColor" : "bg-secondaryColor"}`} key={index} onClick={() => handleDonationFrequency(frequency)}>
                                <span className='leading-6 font-semibold'>{frequency.name}</span>
                            </div>
                        ))
                    }
                </div>

                <p className='leading-6 mt-8'>Donation Amount</p>
                <div className='flex flex-wrap mt-4'>
                    {
                        donationAmount.map((amount, index) => (
                            <div className={`px-6 py-3 mr-3 mb-2 rounded-large cursor-pointer ${amount.selected ? "bg-primaryColor" : "bg-secondaryColor"}`} key={index} onClick={() => handleDonationAmount(amount)}>
                                <span className='leading-6 font-semibold'>{amount.name}</span>
                            </div>
                        ))
                    }
                </div>

                {
                    selectedAmount === "Other" && (
                        <div className='relative mt-8'>
                            <input type="text" className='w-full h-14 border-1 focus:outline-none pl-10 rounded-lg' placeholder='Donation Amount' />
                            <div className='absolute left-3' style={{ top: 25 }}>
                                <p className='font-semibold leading-6'>$</p>
                            </div>
                        </div>
                    )
                }

                <p className='text-2xl leading-8 font-semibold mt-10 mb-8'>I want to support</p>

                {
                    supportTypes.map((support, index) => (
                        <div className={`h-24.5 w-full p-4 flex items-center mb-4 rounded-lg cursor-pointer ${support.selected ? "bg-primaryColor" : "bg-secondaryColor"}`} onClick={() => handleSupportTypes(support)} key={index}>
                            <div className='h-16 w-16 flex justify-center items-center bg-white rounded-lg'>
                                {support.icon}
                            </div>
                            <div className='ml-5'>
                                <p className='text-xl font-semibold leading-8'>{support.name}</p>
                                <p className={`leading-8 mt-2${support.selected ? "text-black" : "text-mutedTextColor"}`}>{support.description}</p>
                            </div>
                        </div>
                    ))
                }

                <button className='w-full h-14 bg-primaryColor flex justify-center items-center rounded-lg mt-8'>
                    <div>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1004_1302)">
                                <path d="M9.84392 1.74136C11.1579 0.00942006 12.9848 0.000976562 12.9848 0.000976562C12.9848 0.000976562 13.2565 1.62929 11.9511 3.19788C10.5572 4.87278 8.97289 4.59871 8.97289 4.59871C8.97289 4.59871 8.6754 3.28146 9.84392 1.74136ZM9.14002 5.73933C9.81602 5.73933 11.0707 4.81009 12.7037 4.81009C15.5148 4.81009 16.6207 6.81034 16.6207 6.81034C16.6207 6.81034 14.4578 7.91618 14.4578 10.5994C14.4578 13.6264 17.1521 14.6696 17.1521 14.6696C17.1521 14.6696 15.2687 19.9708 12.7247 19.9708C11.5562 19.9708 10.6478 19.1834 9.41665 19.1834C8.16202 19.1834 6.91698 20.0002 6.10608 20.0002C3.783 20.0002 0.848145 14.9715 0.848145 10.9292C0.848145 6.95211 3.33231 4.86581 5.66235 4.86581C7.17709 4.86581 8.35254 5.73933 9.14002 5.73933Z" fill="#2E1708" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1004_1302">
                                    <rect width="16.304" height="20" fill="white" transform="translate(0.848145)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='text-lg font-semibold leading-6 ml-3'>Pay</p>
                </button>

                <button className='w-full h-14 bg-primaryColor flex justify-center items-center rounded-lg mt-4'>
                    <div>
                        <BsGoogle />
                    </div>
                    <p className='text-lg font-semibold leading-6 ml-3'>Google Pay</p>
                </button>

                <Link to='/donor-details' className='w-full h-14 bg-primaryColor flex justify-center items-center rounded-lg mt-4'>
                    <div>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0373 17.2184H2.65178C2.39123 17.2184 2.17984 17.007 2.17984 16.7464V7.76981H22.2617V8.94966C22.2617 9.27411 22.5272 9.53958 22.8517 9.53958C23.1761 9.53958 23.4416 9.27411 23.4416 8.94966V4.69731C23.4416 3.78785 22.6993 3.04553 21.7898 3.04553H2.65178C1.7374 3.04553 1 3.78785 1 4.69731V16.7464C1 17.6559 1.74232 18.3982 2.65178 18.3982H14.0422C14.3666 18.3982 14.6321 18.1328 14.6321 17.8083C14.6321 17.4838 14.3666 17.2184 14.0373 17.2184ZM2.65178 4.22537H21.7898C22.0503 4.22537 22.2617 4.43676 22.2617 4.69731V6.58997H2.17493V4.69731C2.17493 4.43676 2.39123 4.22537 2.65178 4.22537Z" fill="#2E1708" />
                            <path d="M12.8083 12.15C12.8083 11.8255 12.5428 11.5601 12.2183 11.5601H5.12945C4.80499 11.5601 4.53953 11.8255 4.53953 12.15C4.53953 12.4744 4.80499 12.7399 5.12945 12.7399H12.2183C12.5477 12.7399 12.8083 12.4744 12.8083 12.15Z" fill="#2E1708" />
                            <path d="M5.12945 13.6739C4.80499 13.6739 4.53953 13.9394 4.53953 14.2639C4.53953 14.5883 4.80499 14.8538 5.12945 14.8538H7.96598C8.29044 14.8538 8.5559 14.5883 8.5559 14.2639C8.5559 13.9394 8.29044 13.6739 7.96598 13.6739H5.12945Z" fill="#2E1708" />
                            <path d="M5.06062 10.6014H12.1495C12.474 10.6014 12.7394 10.336 12.7394 10.0115C12.7394 9.68706 12.474 9.42159 12.1495 9.42159H5.06062C4.73617 9.42159 4.4707 9.68706 4.4707 10.0115C4.4707 10.336 4.73125 10.6014 5.06062 10.6014Z" fill="#2E1708" />
                            <path d="M24.4149 14.6621H23.5497V13.2856C23.5497 11.5797 22.1585 10.1885 20.4526 10.1885C18.7468 10.1885 17.3556 11.5797 17.3556 13.2856V14.6621H16.4903C16.1659 14.6621 15.9004 14.9275 15.9004 15.252V20.3646C15.9004 20.6891 16.1659 20.9545 16.4903 20.9545H24.41C24.7345 20.9545 25 20.6891 25 20.3646V15.252C25.0049 14.9226 24.7394 14.6621 24.4149 14.6621ZM18.5354 13.2807C18.5354 12.2237 19.3957 11.3634 20.4526 11.3634C21.5096 11.3634 22.3699 12.2237 22.3699 13.2807V14.6571H18.5354V13.2807ZM23.825 19.7698H17.0803V15.837H23.8201V19.7698H23.825Z" fill="#2E1708" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 4.69731C0.75 3.65026 1.59885 2.79553 2.65178 2.79553H21.7898C22.8373 2.79553 23.6916 3.64978 23.6916 4.69731V8.94966C23.6916 9.41218 23.3142 9.78958 22.8517 9.78958C22.3891 9.78958 22.0117 9.41218 22.0117 8.94966V8.01981H2.42984V16.7464C2.42984 16.8689 2.5293 16.9684 2.65178 16.9684H14.0373C14.5033 16.9684 14.8821 17.3444 14.8821 17.8083C14.8821 18.2708 14.5047 18.6482 14.0422 18.6482H2.65178C1.60425 18.6482 0.75 17.794 0.75 16.7464V4.69731ZM2.65178 3.29553C1.87596 3.29553 1.25 3.92544 1.25 4.69731V16.7464C1.25 17.5178 1.88039 18.1482 2.65178 18.1482H14.0422C14.2286 18.1482 14.3821 17.9947 14.3821 17.8083C14.3821 17.6233 14.2299 17.4684 14.0373 17.4684H2.65178C2.25316 17.4684 1.92984 17.1451 1.92984 16.7464V7.51981H22.5117V8.94966C22.5117 9.13604 22.6653 9.28958 22.8517 9.28958C23.038 9.28958 23.1916 9.13604 23.1916 8.94966V4.69731C23.1916 3.92592 22.5612 3.29553 21.7898 3.29553H2.65178ZM2.65178 4.47537C2.52592 4.47537 2.42493 4.57819 2.42493 4.69731V6.33997H22.0117V4.69731C22.0117 4.57483 21.9123 4.47537 21.7898 4.47537H2.65178ZM1.92493 4.69731C1.92493 4.29534 2.25654 3.97537 2.65178 3.97537H21.7898C22.1884 3.97537 22.5117 4.29869 22.5117 4.69731V6.83997H1.92493V4.69731ZM4.2207 10.0115C4.2207 9.54899 4.59809 9.17159 5.06062 9.17159H12.1495C12.612 9.17159 12.9894 9.54899 12.9894 10.0115C12.9894 10.474 12.612 10.8514 12.1495 10.8514H5.06062C4.59182 10.8514 4.2207 10.4727 4.2207 10.0115ZM5.06062 9.67159C4.87424 9.67159 4.7207 9.82513 4.7207 10.0115C4.7207 10.1993 4.87068 10.3514 5.06062 10.3514H12.1495C12.3359 10.3514 12.4894 10.1979 12.4894 10.0115C12.4894 9.82513 12.3359 9.67159 12.1495 9.67159H5.06062ZM17.1056 13.2856C17.1056 11.4416 18.6087 9.93849 20.4526 9.93849C22.2966 9.93849 23.7997 11.4417 23.7997 13.2856V14.4121H24.4149C24.8747 14.4121 25.2559 14.7822 25.25 15.2536V20.3646C25.25 20.8272 24.8726 21.2045 24.41 21.2045H16.4903C16.0278 21.2045 15.6504 20.8272 15.6504 20.3646V15.252C15.6504 14.7895 16.0278 14.4121 16.4903 14.4121H17.1056V13.2856ZM20.4526 10.4385C18.8849 10.4385 17.6056 11.7178 17.6056 13.2856V14.9121H16.4903C16.304 14.9121 16.1504 15.0656 16.1504 15.252V20.3646C16.1504 20.551 16.304 20.7045 16.4903 20.7045H24.41C24.5964 20.7045 24.75 20.551 24.75 20.3646V15.2482C24.7527 15.0619 24.6034 14.9121 24.4149 14.9121H23.2997V13.2856C23.2997 11.7178 22.0204 10.4385 20.4526 10.4385ZM20.4526 11.6134C19.5338 11.6134 18.7854 12.3618 18.7854 13.2807V14.4071H22.1199V13.2807C22.1199 12.3618 21.3715 11.6134 20.4526 11.6134ZM18.2854 13.2807C18.2854 12.0856 19.2576 11.1134 20.4526 11.1134C21.6477 11.1134 22.6199 12.0856 22.6199 13.2807V14.9071H18.2854V13.2807ZM4.28953 12.15C4.28953 11.6875 4.66692 11.3101 5.12945 11.3101H12.2183C12.6809 11.3101 13.0583 11.6874 13.0583 12.15C13.0583 12.6111 12.6871 12.9899 12.2183 12.9899H5.12945C4.66692 12.9899 4.28953 12.6125 4.28953 12.15ZM5.12945 11.8101C4.94306 11.8101 4.78953 11.9636 4.78953 12.15C4.78953 12.3364 4.94306 12.4899 5.12945 12.4899H12.2183C12.4083 12.4899 12.5583 12.3377 12.5583 12.15C12.5583 11.9636 12.4047 11.8101 12.2183 11.8101H5.12945ZM4.28953 14.2639C4.28953 13.8013 4.66692 13.4239 5.12945 13.4239H7.96598C8.42851 13.4239 8.8059 13.8013 8.8059 14.2639C8.8059 14.7264 8.42851 15.1038 7.96598 15.1038H5.12945C4.66692 15.1038 4.28953 14.7264 4.28953 14.2639ZM5.12945 13.9239C4.94306 13.9239 4.78953 14.0775 4.78953 14.2639C4.78953 14.4502 4.94306 14.6038 5.12945 14.6038H7.96598C8.15237 14.6038 8.3059 14.4502 8.3059 14.2639C8.3059 14.0775 8.15237 13.9239 7.96598 13.9239H5.12945ZM16.8303 15.587H24.0701V19.7698H23.825V20.0198H16.8303V15.587ZM23.5701 19.5198H17.3303V16.087H23.5701V19.5198Z" fill="#2E1708" />
                        </svg>
                    </div>
                    <p className='text-sm font-semibold leading-6 ml-3'>PAY WITH CARD</p>
                </Link>

                <p className='text-xs leading-6 text-mutedTextColor mt-8 text-center'>By paying, you allow Grads Give to use personal information to provide you the content you requested and allow us to assist.</p>
            </div>
        </div>
    )
}

export default DonationPage