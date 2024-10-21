import Image from 'next/image';

const Banner = () => {
    

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-7 flex flex-col justify-center'>
                        <div className='flex gap-2 mx-auto lg:mx-0 pb-10'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Trusted in Medical Credentialing</h3>
                        </div>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Your Prescription for </h3>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-0 lg:pt-0 lg:pb-5'>Worry-Free Credentialing</h1>

                        <div className='flex flex-col items-start justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2 py-3'>
                                <Image src="/assets/banner/tick-mark-icon.svg" style={{color: "#355E3B"}} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Guaranteed Quality: proprietary technology</p>
                            </div>
                            <div className='flex gap-2 py-3'>
                                <Image src="/assets/banner/tick-mark-icon.svg" style={{color: "#355E3B"}} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Team: NCQA Experts</p>
                            </div>
                            <div className='flex gap-2 py-3'>
                                <Image src="/assets/banner/tick-mark-icon.svg" style={{color: "#355E3B"}} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Speed: Fast Turnaround</p>
                            </div>
                            <div className='flex gap-2 py-3'>
                                <Image src="/assets/banner/tick-mark-icon.svg" style={{color: "#355E3B"}} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Affordable: only pay for completed files</p>
                            </div>
                            <div className='flex gap-2 py-3'>
                                <Image src="/assets/banner/tick-mark-icon.svg" style={{color: "#355E3B"}} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Services: Credentialing, Recredentialing, Monitoring, Audits, Consulting</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-5 flex justify-end sm:justify-center md:justify-center'>
                        <Image src="/assets/hero/credential.png" alt="nothing" width={500} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
