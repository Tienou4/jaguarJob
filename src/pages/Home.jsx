import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { JobListing } from '../components/JobListing'
import { JobCard } from '../components/jobCard'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <JobListing/>
        </div>
    )
}

export default Home
