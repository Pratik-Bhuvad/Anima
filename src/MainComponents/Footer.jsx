import React from 'react'
import { Link } from 'react-router-dom'
import footerData from '../Data/Navlinks.json'

const Footer = () => {
    return (
        <div className=' w-[calc(100vw-17 px)] h-60 p-5 bg-[#2a2b2e] flex flex-col justify-between pb-1 *:mx-auto lg:h-44'>
            <div className="w-full h-4/5 flex flex-col-reverse items-center justify-between lg:flex-row lg:h-1/3">
                <section id="socialmedia" className='w-4/12 h-2/6 flex items-center justify-between px-3 *:rounded-xl *:bg-[#d9d9d91a] *:w-2/5 md:w-1/5 *:h-4/5 lg:*:h-full *:flex *:items-center *:justify-center lg:w-1/12 lg:h-full'>
                    <Link><i className="fa-brands fa-instagram lg:fa-2xl"></i></Link>
                    <Link><img src="telegram.png" alt="" className='object-contain w-2/6 lg:w-4/6' /></Link>
                </section>
                <section id="links" className='w-11/12 h-2/5 grid grid-cols-2 justify-center items-center text-xs *:text-end md:text-sm lg:text-base lg:grid-cols-6 lg:w-2/4 lg:*:text-center *:font-bold'>
                    {
                        footerData.footerlinks.map((link, index) => (
                            <Link key={index} to={link.path} className={`${index === 0 ? 'lg:w-[35%] lg:justify-self-end' : ''} ${index === 5 ? 'lg:w-3/5 text-end' : ''}`}
                            >{link.name}</Link>
                        ))
                    }
                </section>
                <button className='w-8 h-8 hidden absolute right-2 rounded-full border-2 lg:block' onClick={()=> scrollTo(0,0)}><i className="fa-solid fa-angle-up"></i></button>
            </div>
            <div className='w-full text-center mx-auto lg:w-2/5'>
                &copy; Anima, Pratik Bhuvad. All rights reserved.
            </div>
        </div>
    )
}

export default Footer