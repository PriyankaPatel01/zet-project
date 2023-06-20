
import Image from 'next/image';
import Brands from '@components/Brands';
import Products from '@components/Products';
import People from '@components/People';
import Why from '@components/Why';
import Steps from '@components/Steps';

const Home = () => {
  return (
    <section className="w-full flex-col ">
      <br />
      <br />
      <div className='container'>
        <div className='float-left p-2 mr-3'>
        <p className=' text-3xl font-bold dark:text-white float-left'>Become a Financial Advisor and <span className='text-sky-600'>Earn Rs.1 Lakh/Month</span></p>
        <br /><br />
        <p className='text-2xl'>No investment required</p>
        <br />
        <Image src="/images/playstore.svg"v width={150} height={150}/>
        </div>
        <div>
          <Image src="/images/HeroImgNew.webp" width={500} height={500}/>        
        </div>
        <br />
        <br />
      </div>
      <Brands/>
      <Products/>
      <br />
      <br /><br />
      <People/>
      
      <Why/>
      <Steps/>
      <br />
      
    </section>
  )
}

export default Home
