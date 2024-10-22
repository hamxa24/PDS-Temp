"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/clients/evry.png"
    },
    {
        imgSrc: "/assets/clients/choosewell.png"
    },
    {
        imgSrc: "/assets/clients/ForvisMazars.png"
    },
    {
        imgSrc: "/assets/clients/kaiserpermanente.png"
    },
    {
        imgSrc: "/assets/clients/longevity.png"
    },
    {
        imgSrc: "/assets/clients/molina.png"
    },
    {
        imgSrc: "/assets/clients/Olofsson-Group.png"
    },
    {
        imgSrc: "/assets/clients/Pace.png"
    },
    {
        imgSrc: "/assets/clients/sentara.png"
    },
    {
        imgSrc: "/assets/clients/ttc.png"
    },
    {
        imgSrc: "/assets/clients/UAM.png"
    },
    {
        imgSrc: "/assets/clients/viability.png"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
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

            <div className='text-center my-20' id="clients">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-midnightblue text-2xl font-semibold">Clients we have served</h2>
                    <div className="py-14 items-center">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="flex items-center h-20" >
                                    <Image className="object-contain w-full h-full" src={item.imgSrc} alt={item.imgSrc} width={200} height={70} />
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>

        )
    }
}
