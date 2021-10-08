import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Banner } from "../Components/Banner"
import { VideoBanner } from '../Components/VideoBanner'
import { Footer } from '../Components/Footer/Footer'

export const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <VideoBanner />
            <Footer />
        </div>
    )
}
