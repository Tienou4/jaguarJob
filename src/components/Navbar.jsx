import React from 'react'
import {assets} from '../assets/assets'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
import {Link} from 'react-router-dom'

export const Navbar = ()=> {
    const {openSignIn} = useClerk()
    const {user} = useUser()

    return (
        <div className='shadow py-4'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                <div>
                    <img 
                        src={assets.logo} 
                        alt="TIENOVA" 
                        className="h-12 sm:h-16 w-auto" 
                    />
                </div>
                {
                    user ? (
                        <div className='flex items-center gap-3'>
                            <Link to="/application" className="text-blue-600 hover:text-blue-800 transition-colors">
                                Applied Jobs
                            </Link>
                            <p className="text-gray-400">|</p>
                            <p className="text-gray-700">Hi, {user.firstName + " " + user.lastName}</p>
                            <UserButton />
                        </div>
                    ) : (
                        <div className='flex gap-4 max-sm:text-sm'>
                            <button className='text-gray-600 hover:text-gray-800 transition-colors'>Recruiter Login</button>
                            <button onClick={() => openSignIn()} className='bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
                        </div>
                    )
                }
                </div>
        </div>
    )
}