import React from 'react';
import { assets } from '../assets/assets';

export const JobCard = ({job}) => {
    // Vérification si job existe
    if (!job) {
        return <div>Aucune information d'emploi disponible</div>;
    }
    
    return (
        <div className='border p-6   border-gray-300 shadow-sm sm:p-6  bg-white rounded-xl overflow-hidden  hover:shadow-md transition-all duration-300 hover:-translate-y-1 '>
            <div className='flex justify-between items-center'>
                <img className='h-8' src={assets.company_icon} alt="Logo de l'entreprise" />
            </div>
            <h4 className='font-medium text-xl mt-2'>{job?.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded' >{job?.location}</span>
                <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded' >{job?.level}</span>
            </div>
            <p  className = "text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{ __html: job?.description ? job.description.slice(0,150) + '...' : '' }}></p>
            <div className='mt-4 flex gap-4 text-sm'>
                <button className='bg-blue-600 text-white px-4 py-2 rounded'>Apply now</button>
                <button className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn more</button>
            </div>
        </div>
    )
}