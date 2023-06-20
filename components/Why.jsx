import Image from "next/image"

const Why = () => {
  return (
    <section className="wh">
        <div className="sm:flex hidden float-left">
        <div className="why-im float-left ">
            <br /><br /><br />
            <h1 className="flex-center text-2xl font-bold">Why <p className="text-blue-600">&nbsp;choose us</p></h1>
            <p className="flex-center text-xl">Why we love our customers</p>
            <br />
            <br />
            <div id="parent">
            <Image src="/images/bgImg.webp"width={200} height={50} className="img1"/>
            <Image src="/images/whyUsHero.webp" width={277} height={374} className="img2"/>
            </div>
            
        </div>
        </div>
        <div className="why-tab float-right">
            <div className="b1">
                <Image src="/images/w1.svg" width={100} height={100}/>
                <p className="font-bold">Zero Investment</p>
                <p>Build your business without any investment</p>
            </div>

            <div className="b1">
                <Image src="/images/w2.svg" width={100} height={100}/>
                <p className="font-bold">Quick Payout</p>
                <p>Direct Payout in your bank account in short time</p>
            </div>

            <div className="b1">
                <Image src="/images/w3.svg" width={100} height={100}/>
                <p className="font-bold">Limitless Earnings</p>
                <p>Direct Payout in your bank account in short time</p>
            </div>

            <div className="b1">
                <Image src="/images/w4.svg" width={100} height={100}/>
                <p className="font-bold">Training & Upskilling</p>
                <p>Get trained by finance and sales experts</p>
            </div>
            <div className="b1">
                <Image src="/images/w5.svg" width={100} height={100}/>
                <p className="font-bold"> Customer Support</p>
                <p>Access tools and content to build relationship</p>
            </div>
            <div className="b1">
                <Image src="/images/w6.svg" width={100} height={100}/>
                <p className="font-bold">Financial Products</p>
                <p>Trustworthy & high-rated products & categories</p>
            </div>

        </div>


    </section>
    
  )
}

export default Why