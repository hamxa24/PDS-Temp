import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Why Hire PDS?', href: '#whp', current: true },
    { name: 'Who we are?', href: '#wwa', current: false },
    { name: 'Clients served', href: '#clients', current: false },
    { name: 'Contact Us', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">

                            {/* LOGO */}

                            <div className="flex gap-3 items-center justify-center h-20 overflow-hidden">
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/1.png'}
                                    alt="dsign-logo"
                                />
                                {/* <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/1.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/2.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/3.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/4.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/5.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/6.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                                    src={'/assets/logo/7.png'}
                                    alt="dsign-logo"
                                /> */}
                                <h2 className='text-xl'>
                                    Provider Data Solutions 
                                </h2>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>


                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
