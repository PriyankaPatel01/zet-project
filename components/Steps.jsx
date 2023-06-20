import Image from "next/image"

const Steps = () => {
  return (
    <section className="stp">
       <div id="slider">
					  <figure >
              <div className="par">
                <p>STEP 1</p><br />
                <p>Download the app and sign up as ZET agent</p><br />
                <Image src="/images/playstore.svg" width={100} height={100} />
                <video width="200" height={200} autoplay muted className="float-right pr-30">
                <source src="/images/Step3.mp4" type="video/mp4"/>
              </video>
              </div>
              <div className="par">
              <p>STEP 2</p><br />
                <p>Register your customers and Recommend financial products</p><br />
                <Image src="/images/playstore.svg" width={100} height={100} />
              </div>
              <div className="par">
              <p>STEP 3</p><br />
                <p>Start earning upto 1 lakh every month</p><br />
                <Image src="/images/playstore.svg" width={100} height={100} />
                <video width="200" height={200} autoplay muted className="float-right pr-30">
                <source src="/images/Step3.mp4" type="video/mp4"/>
              </video>
              </div>
					  </figure>
				</div>
    </section>
  )
}

export default Steps

