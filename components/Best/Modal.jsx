import React, { Fragment, useState } from "react";
import styles from "../../styles/Best.module.css";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "../../public/close-burger.svg";

export default function Example({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.card} onClick={() => setOpen(true)}>
        {children}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          onClose={setOpen}>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='relative inline-block align-middle bg-transparent overflow-hidden transform transition-all sm:max-w-sm sm:w-full'>
                <div>
                  <div
                    className='absolute top-4 cursor-pointer  right-10'
                    onClick={() => setOpen(false)}>
                    <CloseIcon />
                  </div>
                  <iframe
                    className='w-full h-71'
                    scrolling='no'
                    allowtransparency
                    src='https://forms.amocrm.ru/forms/html/form_899389_83a82e9f9d3c37b7266c37f7a58d20df.html?date=1646224165#{"user_origin":{"datetime":"Wed Mar 02 2022 15:29:25 GMT+0300 (Москва, стандартное время)","referer":""},"is_modal":false,"success_message":"","has_redirect":"","is_dark_bg":true,"utm":{"source":"","medium":"","content":"","campaign":"","term":""},"ga":{},"location":"http://localhost:3000/","dp":{}}'></iframe>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
