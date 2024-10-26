import React from 'react'
import Introduction from '../components/Introduction'
import ProfilePhoto from "../components/ProfilePhoto"
import SocialLinks from '../components/SocialLinks'

const Hero = () => {
  return (
    <section id='home'>
        <ProfilePhoto/>
        <SocialLinks/>
        <Introduction/>
    </section>
  )
}

export default Hero