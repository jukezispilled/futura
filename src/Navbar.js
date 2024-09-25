import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-5 py-5 w-full flex justify-center z-20">
      <div className="h-[70px] w-[75%] lg:w-[70%] rounded-full grid content-center">
        <div className="flex justify-center">
          <div className="w-[85%] flex items-center font-custom2 justify-between font-semibold text-lg">
            <a className="flex items-center mr-4" href='/'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </a>
            <div className="flex space-x-12 lg:space-x-15">
              <div className="relative inline-block text-left">
                <Menu as="div" className="inline-block">
                  <div
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    <Menu.Button className="pt-3 inline-flex w-full justify-center gap-x-.5">
                      Services
                      <ChevronDownIcon className="-mr-1.5 h-5 w-5 text-black mt-1" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    show={isMenuOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white"
                      onMouseEnter={() => setIsMenuOpen(true)}
                      onMouseLeave={() => setIsMenuOpen(false)}
                    >
                      <div className="py-1 font-custom2" role="none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/Websites"
                              className={classNames(
                                active ? 'text-slate-700' : 'text-black',
                                'block px-4 py-2'
                              )}
                            >
                              Websites
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/LeadGen"
                              className={classNames(
                                active ? 'text-slate-700' : 'text-black',
                                'block px-4 py-2'
                              )}
                            >
                              LeadGen
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <a className="pt-3" href='/about'>About</a>
              <a className="pt-3" href='/contact'>Contact</a>
              <a className="rounded-full bg-black text-white" href='/scheduleacall'>
                <div className="p-3 font-custom1">Schedule a Call</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;