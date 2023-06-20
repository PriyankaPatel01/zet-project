import Image from "next/image";

const Founder = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h3 className="text-3xl font-bold dark:text-white">Meet our Founders</h3>
      <h3 className="text-2xl">Few words from founders desk</h3>
      <br />
      <br/>
      <div className="row">
        <div className="column_inv">
          <Image src="/images/Manish.webp" alt="f1" width={250} height={250}/>
          <p className="font-bold float-left">Manish Shara</p>
          <br />
          <p className="float-left">Co-Founder & CEO</p>
          <Image src="/images/linkedin.png" className="float-right" width={30} height={30}/>
        </div>
        <div className="column_inv">
          <Image src="/images/Yash.webp" alt="f2" width={250} height={250}/>
          <p className="font-bold float-left">Yash Desai</p>
          <br />
          <p className="float-left">Co-Founder</p>
          <Image src="/images/linkedin.png" className="float-right" width={30} height={30}/>
        </div>
        <div className="column_inv">
          <Image src="/images/Lokesh.webp" alt="f3" width={250} height={250}/>
          <p className="font-bold float-left">Lokesh Agarwal</p>
          <br />
          <p className="float-left">CTO</p>
          <Image src="/images/linkedin.png" className="float-right" width={30} height={30}/>
        </div>
      </div>
      <br /><br /><br />
    </section>
  )
}

export default Founder