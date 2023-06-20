import Evolve from '@components/Evolve'
import Features from '@components/Features'
import Investors from '@components/Investors'
import Founder from '@components/Founders'

import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <div className='mission'>
        
      <h1 className="head_text text-center text-white">OUR MISSION</h1>
        <p className=" desc text-white-600 text-center ">Enabling financial inclusion for the next billion Indians & making their Zindagi Set. Building a platform that enables you to sell financial products & earn up to Rs. 1 lakh every month.</p>
        <br />
        <p className='text-white'>EARN BETTER. LIVE BETTER.</p>
      </div>
      <br />
        <br />
        <Evolve/>
        <Features/>
        <Investors/>
        <Founder/>
        <div>
          <Image className="bg mx-0" src="/images/AboutUsFooter.webp" width={2880} height={1200}/>
      </div>
    </section>
  )
}

export default About
