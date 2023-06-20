
import Image from "next/image";


const Investors = () => {
  return (
    <section>
      <br />
      <h3 className="text-3xl font-bold dark:text-white">Meet the Investors</h3>
      <br />

      <div class="row">
        <div class="column_inv">
          <Image src="/images/c1.webp" alt="TEC" width={200} height={200}/>
        </div>
        <div class="column_inv">
          <Image src="/images/c2.webp" alt="Inc" width={200} height={200}/>
        </div>
        <div class="column_inv">
          <Image src="/images/c3.webp" alt="mint" width={200} height={200}/>
        </div>
        <div class="column_inv">
          <Image src="/images/c4.webp" alt="mint" width={200} height={200}/>
        </div>
    </div>

    {/*desktop*/}
    <div className="sm:flex hidden">
      <div className="row">
      <div class="column_inv">
          <Image src="/images/inv1.webp" alt="inv1" width={250} height={250}/>
          <p className="font-bold">Kunal Shah</p>
          <p>Founder, CRED</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv2.webp" alt="inv2" width={250} height={250}/>
          <p className="font-bold">Gaurav Munjal</p>
          <p>Founder, UNACADEMY</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv3.webp" alt="inv3" width={250} height={250}/>
          <p className="font-bold">Aakrit Vaish</p>
          <p>Co-Founder, HAPTIK</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv4.webp" alt="inv4" width={250} height={250}/>
          <p className="font-bold">Harshil Mathur</p>
          <p>Founder, RAZORPAY</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv5.webp" alt="inv5" width={250} height={250}/>
          <p className="font-bold">Vidit Aatrey</p>
          <p>Founder & CEO, MEESHO</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv6.webp" alt="inv6" width={250} height={250}/>
          <p className="font-bold">Amrish Rau</p>
          <p>CEO, PINELABS</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv7.webp" alt="inv7" width={250} height={250}/>
          <p className="font-bold">Lalit Keshrey</p>
          <p>CEO, GROWW</p>
        </div>
        <div className="column_inv">
          <Image src="/images/inv8.webp" alt="inv8" width={250} height={250}/>
          <p className="font-bold">Gokul Rajaram</p>
          <p>Product, DOORDASH</p>
        </div>
      </div>
    </div> 
    </section>
  )
}

export default Investors
