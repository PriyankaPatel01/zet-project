import Image from "next/image"

const Brands = () => {
  return (
    <section className="w-full flex-col">
      <br />
      <br />
      <h3 className="text-3xl font-bold text-center">Top Brands on ZET </h3>
      <p className="text-xl text-center">We are trusted by best brand in the country</p>
      <br />
      <br />
      <br />
      
      <div className="logos">
        <div className="logos-slide">
            <Image src="/images/Axis.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/Bajaj.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/Icici.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/BOB.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/Idfc.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/IndusInd.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/YesBank.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/StandardChartered.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/Amex.webp" width={150} height={150} className="img_scr"/>
            <Image src="/images/Aufin.webp" width={150} height={150} className="img_scr"/>
        </div>
      </div>
    </section>
  )
}

export default Brands
