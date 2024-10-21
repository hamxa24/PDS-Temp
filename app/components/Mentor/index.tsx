"use client";
import Slider from "react-slick";
import React, { Component, useState, Fragment } from "react";
import Image from "next/image";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Button, ConfigProvider, Modal, Space } from "antd";
// import { createStyles, useTheme } from 'antd-style';
import { Dialog, Transition } from '@headlessui/react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { FaBriefcase } from 'react-icons/fa';

// CAROUSEL DATA
type TimelineDetail = {
    label: string;
    children: string;
};

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  details: Array<TimelineDetail>
}



const postData: DataType[] = [
  {
    profession: "Provider Data Solutions Founder and President",
    name: "Rob Westcott, JD, CPA",
    imgSrc: "/assets/mentor/man.png",
    details: [
                {
                    "label": "1995 – 2008",
                    "children": "Rob was Vice President of Operations for Amerigroup. Rob led major company functions including Credentialing, Provider Information, Claims Appeals, Claims Projects, Distribution Services, Provider Contracting, and led a technical team developing automation and quality technology."
                },
                {
                    "label": "2009 – 2021",
                    "children": "Rob founded Cred-Ability Solutions LLC in 2009 and successfully led that NCQA Certified credentials verification organization company until 2021 when he sold it to Medallion (First Layer AI)."
                },
                {
                    "label": "2021 – Present",
                    "children": "Rob founded and is President of Provider Data Solutions LLC (PDS). Rob designed and developed the proprietary credentialing software used by PDS."
                }
            ],
  },
  {
    profession: "Provider Data Solutions Executive Credentialing Specialist",
    name: "Judy Gateley",
    imgSrc: "/assets/mentor/man.png",
    details: [
                {
                    "label": "Pre-Americaid",
                    "children": "Judy, add your pre-Americaid job?"
                },
                {
                    "label": "199X to 200X",
                    "children": "Judy was Director of Credentialing for Amerigroup. Judy managed the credentialing of more than 100,000 providers across the nation. Judy – add something about NCQA here."
                },
                {
                    "label": "200X to 20XX",
                    "children": "Executive Credentialing Specialist: Judy performs delegated credentialing audits for large provider IPAs and groups and is our credentialing subject matter expert."
                }
            ],
  },
  {
    profession: "Senior Credentialing Specialist and Client Liaison",
    name: "Stephanie Barnett",
    imgSrc: "/assets/mentor/man.png",
    details: [
                {
                    "label": "Fortune 100 Insurance Company",
                    "children": "Nearly a decade managing national provider contracting, data management, and credentialing for a Fortune 100 insurance company."
                },
                {
                    "label": "Hospitals and Health Systems",
                    "children": "Two decades leading the managed care support functions for hospitals, multi-specialty physician organizations, and other health systems."
                },
                {
                    "label": "Community Coalitions",
                    "children": "More than a decade building community coalitions to improve access to more compassionate and person-centered care."
                }
            ],
  },
  {
    profession:
      "Senior Credentialing Specialist and NCQA Certification Subject Matter Expert",
    name: "Laraine Dover, MBA",
    imgSrc: "/assets/mentor/man.png",
    "details": [
                {
                    "label": "2008 – 2023",
                    "children": "Director of Provider Support Services of Ballad Health. Laraine, is it OK to include this here?"
                },
                {
                    "label": "2023 – Present",
                    "children": "Director of Payor Relations."
                },
                {
                    "label": "2020 – Present",
                    "children": "Senior Credentialing Specialist and our NCQA Certification subject matter expert. Laraine, what year did you start with us? Please edit your brief job summary above so it is accurate, and marketing focused."
                }
            ],
  },
  {
    profession: "Chief Technology Officer (CTO)",
    name: "Khalil Sheikh",
    imgSrc: "/assets/mentor/man.png",
    "details": [
                {
                    "label": "1986-2006",
                    "children": "EVP Software & Strategy Saama Technologies & Integnology."
                },
                {
                    "label": "2010 – 2017",
                    "children": "Led software and IT for a group of companies for Vavni/Trellisoft."
                },
                {
                    "label": "2018 – 2020",
                    "children": "EVP Solutions & Strategy for Intelliswift Software and its subsidiaries."
                },
                {
                    "label": "2020 – 2022",
                    "children": "EVP Solutions & Strategy for Saxon Global & its affiliate companies."
                },
                {
                    "label": "2022 – Present",
                    "children": "Executive Technology Advisor for Planet Group. Khalil and his team built, improve, and maintain the PDS technology and developed several healthcare platforms."
                }
            ],
  },
];

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

export const Mentor: React.FC = () => {

    let [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeModal = () => {
        setIsOpen(false)
        setSelectedIndex(null);
    }

    const openModal = (index:any) => {
        setSelectedIndex(index);
        setIsOpen(true)
    }


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1500,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  // const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  // const handleOpen = () => {
  //     onOpen();
  //   }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-10 sm:py-24 bg-paleblue" id="wwa">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative">
        <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">
          Meet with our <br /> team.
        </h2>
        <p className="font-normal text-darkgray text-center my-4 sm:text-justify">
          We are a team of friends, coworkers and technology professionals who
          have a tremendous amount of credentialing expertise and experience,
          and we provide outstanding service to clients. Members of our team
          have worked together for decades in medical credentialing.
        </p>
        <Slider {...settings}>
          {postData.map((items, i) => (
            <>
              <div key={i}>
                <div className="m-3 py-14 md:my-10 text-center">
                  <div className="relative">
                    <Image
                      src={'/assets/mentor/right-face.png'}
                      alt="user-image"
                      width={306}
                      height={0}
                      className="inline-block m-auto"
                    />
                    <div className="absolute right-[10px] bottom-[102px] bg-white rounded-full p-4 cursor-pointer transform hover:scale-110 hover:rotate-180 transition-transform duration-300 ease-in-out">
                      <Image
                        src={"/expand.svg"}
                        alt="linkedin-image"
                        width={25}
                        height={24}
                        className=""
                        onClick={()=> openModal(i)}
                      />
                    </div>
                  </div>
                  <div className="-mt-10">
                    <h3 className="text-2xl font-semibold text-lightblack">
                      {items.name}
                    </h3>
                    <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50">
                      {items.profession}
                    </h4>
                  </div>
                </div>
              </div>
              {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"2xl"} placement="center">
                                <ModalContent>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                        </p>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                        </p>
                                        <p>
                                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                        Action
                                        </Button>
                                    </ModalFooter>
                                    </>
                                )}
                                </ModalContent>
                            </Modal> */}
              {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal> */}

              <Transition appear show={isOpen && selectedIndex === i} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-slategray bg-opacity-5" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-2xl shadow-lg transform overflow-hidden bg-white rounded-2xl p-6 text-left align-middle transition-all">
                            <div key={i} className="flex flex-col md:flex-row items-center gap-8 py-4 px-3">
                                    {/* Image Section */}
                                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                                        <img
                                            src={items.imgSrc}
                                            alt="Timeline Image"
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="-mt-10">
                                            <h5 className="text-lg font-semibold text-lightblack text-center">
                                                {items.name}
                                            </h5>
                                            <h6 className="text-sm font-normal text-lightblack pt-2 opacity-50 text-center">
                                                {items.profession}
                                            </h6>
                                        </div>
                                    </div>
                                    {/* Timeline Section */}
                                    <div className="w-full lg:w-2/3 space-y-4">
                                        {items.details.map((item, index) => (
                                            <div key={index} className="flex gap-4 items-start">
                                                {/* Icon */}
                                                <div className="text-indigo-200 flex-shrink-0">
                                                    <FaBriefcase className="w-6 h-6 text-Blueviolet" />
                                                </div>
                                                {/* Timeline Content */}
                                                <div>
                                                    <h3 className="text-lg font-bold">
                                                        {item.label}
                                                    </h3>
                                                    <p className="mt-1 text-lightblack opacity-75 text-sm text-justify">{item.children}</p>
                                                    <div className="mt-4 h-px bg-gray-300" />
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};
