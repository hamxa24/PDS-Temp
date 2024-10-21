import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
    redirect: string[]
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['Why Hire PDS', 'Who we are', 'Clients', 'Contact Us'],
        redirect: ['#whp', '#wwa', '#clients', '#contact'],
    },
    // {
    //     id: 2,
    //     section: "Our Values",
    //     link: ['Expertise', 'Better Services', 'Complete Files', 'Transparent', 'Affordable Cost'],
    //     redirect: ['#whp', '#whp', '#whp', '#whp', '#whp']
    // }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-3">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12 border-t border-t-gray-blue">

                {/* COLUMN-1 */}

                <div className='sm:col-span-4 lg:col-span-4'>
                    <div className="flex gap-3 items-center justify-start h-20 overflow-hidden">
                        <img
                            className="h-auto p-3 max-h-full w-auto max-w-full object-contain"
                            src={'/assets/logo/PDSlogo.png'}
                            alt="dsign-logo"
                        />
                        <h2 className='text-xl'>
                            Provider Data Solution
                        </h2>
                    </div>
                    {/* <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'> Your trusted partner in medical credentialing</h3> */}
                    {/* <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i}>
                            <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                            </div>
                        </Link>
                        ))}

                    </div> */}
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <>
                        {
                            product.link.map((link, index)=>{
                                return (
                                    <div key={product.id} className="sm:col-span-2 flex items-center">
                                        <Link href={product.redirect[index]} className="text-darkgray text-base font-normal space-links">{link}</Link>
                                    </div>
                                )
                            })
                        }
                        </>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@PDS.All rights reserved</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
