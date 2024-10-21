"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'
import { FiCheck } from 'react-icons/fi';

// CAROUSEL DATA

interface DataType {
    heading: string;
    description: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Expertise',
        description: 'No other CVO provides the level of expertise our team members provide.',
        name: "Colt stelle",
        imgSrc: '/assets/advantages/expertise.jpg',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Quality',
        description: 'Our technology and team provide proven quality. NCQA has lauded the PDS technology platform and our staff expertise in multiple audits. ',
        name: "Colt stelle",
        imgSrc: '/assets/advantages/service.png',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Service',
        description: 'PDS offers unmatched service with rapid turnaround times. We provide comprehensive support, including credentialing, recredentialing, ongoing monitoring, delegated audits, and NCQA audit assistance. Our scope extends further with regular client meetings and detailed reporting.',
        name: "Colt stelle",
        imgSrc: '/assets/advantages/services.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Complete Files - Guaranteed',
        description: 'PDS ensures files are complete before credentialing—guaranteed, or the client pays nothing. Unlike other CVOs, we don’t charge for incomplete work.',
        name: "Colt stelle",
        imgSrc: '/assets/advantages/files.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Transparency',
        description: 'Clients can check or expedite the credentialing status of any provider file at any time.',
        name: "Colt stelle",
        imgSrc: '/assets/advantages/transparency.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Cost',
        description: 'Our cost per clean file is an excellent value compared to competitors.',
        name: "Colt stelle",
        imgSrc: '/assets/advantages/cost.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 500,
            cssEase: "linear",
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="whp">
                <div className='mx-auto max-w-7xl my-4 sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Why Hire PDS?</h3>
                        
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl group relative overflow-hidden'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath rounded-xl" />
                                        
                                        {/* <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div> */}
                                    </div>

                                    <div className="px-3">
                                        <span className="flex gap-2 items-center pt-6 pb-4 ">
                                            <Image src="/assets/banner/tick-mark-icon.svg" alt="check-image" width={25} height={25} className='smallImage '/>
                                            <h4 className='text-xl font-bold text-black'>{items.heading}</h4>
                                        </span>
                                        {/* <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4> */}
                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div>
                                            <h4 className='text-base font-normal pt-6 opacity-75 truncate'>{items.description}</h4>
                                        </div>

                                        {/* <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-medium">${items.price}</h3>
                                            </div>
                                        </div> */}


                                        {/* <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div> */}
                                        <div className="absolute inset-0 bg-white bg-opacity-95 p-6 rounded-2xl transform translate-y-full group-hover:translate-y-1/3 transition-transform duration-300 ease-in-out z-10">
        
                                                <span className='flex gap-3 items-center py-1 mb-3'>
                                                    <Image src="/assets/banner/tick-mark-icon.svg" alt="check-image" width={25} height={25} className='smallImage'/>
                                                    <h3 className='text-xl font-bold text-gray-800'>
                                                        {items.heading}
                                                    </h3>
                                                </span>
                                            <hr></hr>
                                            <p className='text-sm font-medium opacity-75 text-justify mt-3'>{items.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
