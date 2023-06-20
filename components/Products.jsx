import Image from "next/image"

const Products = () => {
  return (
    <div className="w-full flex-col sec-prdct">
      <br />
      <br />
      <h3 className="text-3xl font-bold text-center">Products on ZET </h3>
      <p className="text-xl text-center">We are trusted by best brand in the country</p>
      <br />
      <br />

      <div className="box-container">
      <div className="box box-1">
            <Image src="/images/cc.webp" width={150} height={150} className="float-left  bg-im"/>
            <div className="descr">
                <br />
                <br />
                <p className="font-semibold">CREDIT CARDS</p>
                <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
        </div>

        <div className="box box-2">
            <Image src="/images/Loan.webp" width={150} height={150} className="float-left  bg-im"/>
            <div className="descr">
                <br />
                <br />
                <p className="font-semibold">LOANS</p>
                <p>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
            </div>
        </div>

        <div className="box box-3">
            <Image src="/images/BNPL.webp" width={150} height={150} className="float-left  bg-im"/>
            <div className="descr">
                <br />
                <br />
                <p className="font-semibold">BUY NOW PAY LATER</p>
                <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
            </div>
        </div>

        <div className="box box-4">
            <Image src="/images/AccountSave.webp" width={150} height={150} className="float-left bg-im"/>
            <div className="descr">
                <br />
                <br />
                <p >SAVING ACCOUNTS</p>
                <p className="font-semibold">SAVING ACCOUNTS</p>
                <p>ZET offers range of savings account that suits your personal needs for the banking.</p>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Products
