import React from 'react'

const ContactUs = () => {
    const contactUsOptions = [
        {
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1107_605)">
                    <path d="M20 26.6668C23.6819 26.6668 26.6667 23.6821 26.6667 20.0002C26.6667 16.3183 23.6819 13.3335 20 13.3335C16.3181 13.3335 13.3333 16.3183 13.3333 20.0002C13.3333 23.6821 16.3181 26.6668 20 26.6668Z" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 25L30.5833 30.5833" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.0001 25L9.41672 30.5833" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.41672 9.41748L15.0001 15.0008" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.5833 9.41748L25 15.0008" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1107_605">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
            heading: "Call Support",
            description: "We are ready when you are. Call us at 1-800-435-2344"
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1107_621)">
                    <path d="M35 23.3333L30 18.3333H18.3334C17.8913 18.3333 17.4674 18.1577 17.1548 17.8452C16.8423 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667C16.6667 6.22464 16.8423 5.80072 17.1548 5.48816C17.4674 5.17559 17.8913 5 18.3334 5H33.3334C33.7754 5 34.1993 5.17559 34.5119 5.48816C34.8244 5.80072 35 6.22464 35 6.66667V23.3333Z" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.3333 24.9998V28.3332C23.3333 28.7752 23.1577 29.1991 22.8452 29.5117C22.5326 29.8242 22.1087 29.9998 21.6667 29.9998H10L5 34.9998V18.3332C5 17.8911 5.17559 17.4672 5.48816 17.1547C5.80072 16.8421 6.22464 16.6665 6.66667 16.6665H10" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1107_621">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
            heading: "Chat with us",
            description: "Tap here to start a live support chat to be paired with a represetnative"
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1107_632)">
                    <path d="M20 23.3335C22.7614 23.3335 25 21.0949 25 18.3335C25 15.5721 22.7614 13.3335 20 13.3335C17.2386 13.3335 15 15.5721 15 18.3335C15 21.0949 17.2386 23.3335 20 23.3335Z" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.4283 27.7631L22.3566 34.8348C21.7316 35.4592 20.8843 35.8099 20.0008 35.8099C19.1173 35.8099 18.27 35.4592 17.645 34.8348L10.5716 27.7631C8.707 25.8984 7.43719 23.5226 6.92278 20.9362C6.40836 18.3498 6.67245 15.669 7.68164 13.2327C8.69083 10.7964 10.3998 8.71403 12.5924 7.24898C14.7851 5.78392 17.3629 5.00195 20 5.00195C22.637 5.00195 25.2149 5.78392 27.4075 7.24898C29.6001 8.71403 31.3091 10.7964 32.3183 13.2327C33.3275 15.669 33.5916 18.3498 33.0772 20.9362C32.5627 23.5226 31.2929 25.8984 29.4283 27.7631V27.7631Z" stroke="#6F4025" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1107_632">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>,
            heading: "Address",
            description: "2355 Westwood Blvd SteLos Angeles, California 90064"
        }
    ]
    return (
        <div className="container mx-auto pt-8" id="contact">
            <div className='px-4 py-4 lg:py-20 bg-lightBlueSectionBackground'>
                <p className='text-3.5xl lg:text-5xl font-bold leading-16 text-center'>Contact Us</p>
                <div className='mt-12 grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:flex lg:justify-between'>
                    {
                        contactUsOptions.map((option, index) => (
                            <div key={index} className="w-full lg:w-100 min-h-76 px-12 py-10 flex flex-col items-center contact-us rounded-2xl">
                                <div className='w-20 h-20 flex justify-center items-center rounded-2xl contact-us-icon'>
                                    {option.icon}
                                </div>
                                <p className='mt-8 text-2xl font-bold leading-8'>{option.heading}</p>
                                <p className='leading-8 mt-4 text-mutedTextColor text-center'>{option.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactUs