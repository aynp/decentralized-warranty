import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useAddress, useDisconnect } from '@thirdweb-dev/react';

const navigation = [
  { name: 'Store', href: '/store', current: true },
  { name: 'Home', href: '/', current: false },
];
import Image from 'next/image';
import logo from '../../public/dwlogo.png';
import profile from '../../public/account.png';
// import profile from '/profile.jpg';
export default function Example() {
  const address = useAddress();
  const disconnect = useDisconnect();
  console.log('my address : ', address);
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div>
                    <Link href="/">
                      <Image
                        src={logo}
                        height={50}
                        width={50}
                        layout="fixed"
                        alt="dwlogo"
                        className="mr-3 h-8"
                      />
                    </Link>
                  </div>
                  {/* <div>

                  <Link href="/">

                  </Link>
                  </div> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          (item.current
                            ? 'bg-[#00564d] text-gray-200'
                            : 'text-gray-600 hover:bg-[#00897b] hover:text-gray-100') +
                          ' px-3 py-2 rounded-md text-sm font-medium'
                        }
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {address ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <span className="h-8 w-8 rounded-full">
                          <Image
                            src={profile}
                            height={50}
                            width={50}
                            className="h-8 w-8 rounded-full"
                            alt="main logo"
                          />
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={
                                (active ? 'bg-[#00564d]' : '') +
                                ' block px-4 py-2 text-sm text-gray-700'
                              }>
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={
                                (active ? 'bg-[#00564d]' : '') +
                                ' block px-4 py-2 text-sm text-gray-700'
                              }>
                              <Link href="/mine">My Product</Link>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={disconnect}
                              className={
                                (active ? 'bg-[#00564d]' : '') +
                                ' block px-4 py-2 text-sm text-gray-700'
                              }>
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    (item.current
                      ? 'bg-gray-900 text-gray-100'
                      : 'text-gray-600 hover:bg-[#00564d] hover:text-gray-800') +
                    ' block px-3 py-2 rounded-md text-base font-medium'
                  }
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
