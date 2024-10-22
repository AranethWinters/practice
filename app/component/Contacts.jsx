import React from 'react'
import {FaYoutube, FaFacebook, FaXTwitter, FaEnvelope} from 'react-icons/fa6';
import Link from 'next/link';
import contactStyles from './../style/contacts.module.css'

const Contacts = () => {
  return (
    <div className='flex flex-col items-center pb-3'>
        <div className='flex text-center gap-2 flex-wrap'>
            <div className='flex flex-col justify-items-center items-center justify-center border-2 border-white p-10 rounded-[2rem]'>
                <Link href="https://www.youtube.com/@pogeman2345">
                    <div className={`${contactStyles.linked_div}`}>
                        <FaYoutube size={50}/>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col justify-items-center items-center justify-center border-2 border-white p-10 rounded-[2rem]'>
                <Link href="https://www.facebook.com/bananaCalara">
                    <div className={`${contactStyles.linked_div}`}>
                        <FaFacebook size={50}/>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col justify-items-center items-center justify-center border-2 border-white p-10 rounded-[2rem]'>
                <Link href="https://x.com/nerdyfruit">
                    <div className={`${contactStyles.linked_div}`}>
                        <FaXTwitter size={50}/>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col justify-items-center items-center justify-center border-2 border-white p-10 rounded-[2rem]'>
                    <div className={`${contactStyles.linked_div}`}>
                        <FaEnvelope size={50}/>
                        <p>ernestblane@gmail.com</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts
