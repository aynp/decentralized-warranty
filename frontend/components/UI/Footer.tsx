import React from 'react';
import Link from 'next/link';
import Image from  'next/image';
import img from "../../public/dwlogo.png";
export default function Footer() {
  return (
    <div>
      
<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-100">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <Image src={img} height={50} width={50} alt="dwlogo" className="mr-3 h-8"/>
           
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-600">Shopfy</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-700">
            <li>
                <a href="/shop" className="mr-4 hover:underline md:mr-6 ">Shop</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-700">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
</footer>

    </div>
  );
}
