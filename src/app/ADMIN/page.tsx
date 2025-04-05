import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import adminLogo from "@/../public/admin_logo.png"

const adminMenu = [
    {
        title: "MENU",
        items: [
            {
                icon: "🏠",
                label: "Home",
                href: "/ADMIN"
            },
            {
                icon: "👤",
                label: "Add User",
                href: "/ADMIN/user"
            }
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "💻",
                label: "Web control panel",
                href: "/ADMIN"
            },
        ]
    }
]



const ADMIN = () => {
    return (
        <div className='h-screen flex'>
            <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-red-50'>
                <Link className='flex items-center justify-center lg:justify-start gap-2' href={"/ADMIN"}>
                    <Image src={adminLogo} alt='logo' width={32} height={32} />
                    <span className='hidden lg:block font-extrabold'>Halal Loan Foundation</span>
                </Link>
                <hr className='my-4 base:my-4' />
                {
                    adminMenu.map(i => (
                        <div key={i.title}>
                            <p className='mt-10 mb-2 hidden lg:block font-bold text-gray-500'>{i.title}</p>
                            {i.items.map(item => (
                                <Link className='mt-2 flex items-center ms-5 lg:justify-start gap-2' href={item.href}>
                                    <p className='text-2xl'>{item.icon}</p>
                                    <p className='text-lg mt-1 hidden lg:block font-semibold'>{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    ))
                }
            </div>
            <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-4 bg-blue-50'>
                <div className='w-96 mx-auto'>
                    <form action="" className='flex flex-col'>
                    <p className='font-bold mb-2'>Member Info</p>
                        <label className='flex flex-col mb-5'>
                            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Member Name</span>
                            <input type="text" name="name" className="border p-2 outline-none" placeholder="Member Full Name" />
                        </label>
                        <label className='flex flex-col mb-5'>
                            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Member Type</span>
                            <input type="text" name="userType" className="border p-2 outline-none" placeholder="Member Type" />
                        </label>
                        <label className='flex flex-col mb-5'>
                            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Father Name</span>
                            <input type="text" name="fName" className="border p-2 outline-none" placeholder="Father Name" />
                        </label>
                        <label className='flex flex-col mb-5'>
                            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Husband Name</span>
                            <input type="text" name="hName" className="border p-2 outline-none" placeholder="Husband Name" />
                        </label>
                        <label className='flex flex-col mb-5'>
                            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Mother Name</span>
                            <input type="text" name="mName" className="border p-2 outline-none" placeholder="Mother Name" />
                        </label>
                        <p className='font-bold mb-2'>Permanent Address</p>
                        <label className='flex flex-col mb-5'>
                            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Village</span>
                            <input type="text" name="village" className="border p-2 outline-none" placeholder="Village" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ADMIN
