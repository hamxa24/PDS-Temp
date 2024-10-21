import Image from "next/image";

const Newsletter = () => {
    return (
        <>
            {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
            <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl" id="contact">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    <div className="col-span-12 bg-imagee w-full">
                        <div className="mb-10 mt-24 lg:mx-64 lg:my-24 pt-20">
                            <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">Contact Us</h3>
                            <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                            How can we help you? <br /> Please contact us online or by phone - 757-373-5050
                            </h3>

                            <div>
                                <div className="text-white focus-within:text-white flex rounded-full pt-5 lg:pt-0 mb-5">
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="First Name" autoComplete="off" />
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Last Name" autoComplete="off" />
                                    {/* <input type="Email address" name="q" className="py-3 lg:py-6 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your email address" autoComplete="off" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                        <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                            <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                                        </button>
                                    </div> */}
                                </div>
                                <div className="text-white focus-within:text-white flex rounded-full pt-5 lg:pt-0 mb-5">
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Job title" autoComplete="off" />
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Office Phone" autoComplete="off" />
                                    {/* <input type="Email address" name="q" className="py-3 lg:py-6 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your email address" autoComplete="off" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                        <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                            <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                                        </button>
                                    </div> */}
                                </div>
                                <div className="text-white focus-within:text-white flex rounded-full pt-5 lg:pt-0 mb-5">
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Mobile Phone" autoComplete="off" />
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Email" autoComplete="off" />
                                    {/* <input type="Email address" name="q" className="py-3 lg:py-6 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your email address" autoComplete="off" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                        <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                            <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                                        </button>
                                    </div> */}
                                </div>
                                <div className="text-white focus-within:text-white flex rounded-full pt-5 lg:pt-0 mb-5">
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Company" autoComplete="off" />
                                    <input type="Email address" name="q" className="py-3 lg:py-3 text-sm md:text-lg w-full mx-3 bg-white text-black rounded-full pl-8 focus:outline-none focus:text-white" value={'USA'} placeholder="Country" autoComplete="off" disabled />
                                    {/* <input type="Email address" name="q" className="py-3 lg:py-6 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your email address" autoComplete="off" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                        <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                            <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                                        </button>
                                    </div> */}
                                </div>
                                <div className="relative text-white focus-within:text-white flex pt-5 lg:pt-0 mb-5">
                                    <textarea name="q" className="py-3 lg:py-3 h-[6rem] text-sm md:text-lg w-full mx-3 rounded-xl text-black pl-8 focus:outline-none focus:text-black" placeholder="Message" autoComplete="off" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                        <button type="submit" className="p-2 lg:p-2 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                            <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={20} height={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Newsletter;