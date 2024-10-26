import React from 'react'
import ProfilePhoto from '../components/ProfilePhoto'
import SocialLinks from '../components/SocialLinks'
import Introduction from '../components/Introduction'

const Home = () => {
  return (
    <section id='home'>
        <ProfilePhoto/>
        <SocialLinks/>
        <Introduction/>
    </section>
  )
}

export default Home