import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'


const Register = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden lg:block'>
                    <button className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-white hover:text-black hover:bg-[#FFFF00]" onClick={openModal}>
                        Book a Demo
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
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
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-4 w-full">
                                        <div className="w-full max-w-lg space-y-8">
                                            <div>
                                                <img
                                                    className="mx-auto h-12 w-auto"
                                                    src="/assets/logo/PDSlogo.png"
                                                    alt="Your Company"
                                                />
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Book a Demo Today
                                                </h2>
                                            </div>
                                            <p className='text-center'>You must be a resident of USA</p>
                                            <form className="w-full mt-8 space-y-6" action="#" method="POST">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="-space-y-px rounded-md shadow-sm w-full ">
                                                    <div className='flex justify-between gap-1'>
                                                        <div className='my-1'>
                                                            <label htmlFor="firstname" className="sr-only">
                                                                First Name
                                                            </label>
                                                            <input
                                                                id="firstname"
                                                                name="firstname"
                                                                type="text"
                                                                autoComplete=""
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="First Name"
                                                                />
                                                        </div>
                                                        <div className='my-1'>
                                                            <label htmlFor="lastname" className="sr-only">
                                                                Last Name
                                                            </label>
                                                            <input
                                                                id="lastname"
                                                                name="lastname"
                                                                type="text"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Last Name"
                                                                />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between gap-1'>
                                                        <div className='my-1'>
                                                            <label htmlFor="jobtitle" className="sr-only">
                                                                Job Title
                                                            </label>
                                                            <input
                                                                id="jobtitle"
                                                                name="jobtitle"
                                                                type="text"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Job Title"
                                                                />
                                                        </div>
                                                        <div className='my-1'>
                                                            <label htmlFor="officephone" className="sr-only">
                                                                Office Phone
                                                            </label>
                                                            <input
                                                                id="officephone"
                                                                name="officephone"
                                                                type="text"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Office Phone"
                                                                />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between gap-1'>
                                                        <div className='my-1'>
                                                            <label htmlFor="mobilephone" className="sr-only">
                                                                Mobile Phone
                                                            </label>
                                                            <input
                                                                id="mobilephone"
                                                                name="mobilephone"
                                                                type="text"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Mobile Phone"
                                                                />
                                                        </div>
                                                        <div className='my-1'>
                                                            <label htmlFor="email-address" className="sr-only">
                                                                Email address
                                                            </label>
                                                            <input
                                                                id="email-address"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Email address"
                                                                />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between gap-1'>
                                                        <div className='my-1'>
                                                            <label htmlFor="company" className="sr-only">
                                                                Company
                                                            </label>
                                                            <input
                                                                id="company"
                                                                name="company"
                                                                type="text"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Company"
                                                                />
                                                        </div>
                                                        <div className='my-1'>
                                                            <label htmlFor="country" className="sr-only">
                                                                Country
                                                            </label>
                                                            <input
                                                                id="country"
                                                                name="country"
                                                                type="text"
                                                                autoComplete="email"
                                                                disabled
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Country"
                                                                value={'USA'}
                                                                />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                            Remember me
                                                        </label>
                                                    </div>

                                                </div> */}

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                        </span>
                                                        Book a demo
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 "
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Register;
