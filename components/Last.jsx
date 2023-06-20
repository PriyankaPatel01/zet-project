import Image from "next/image"

const Last = () => {
  return (
    <div className='sect'>
        <br />
        <br />
        <Image src="/images/logo-2.svg" width={100} height={100} className="ml-20"/>
        <br />
        <hr />
        <br />
        <footer>
            <div className="container_f">
                <div className="row_f">
                    <div className="col_f">
                        <h4>COMPANY</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Partner with Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="col_f">
                        <h4>LEGAL</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>

                    <div className="col_f">
                        <h4>CONTACT</h4>
                        <ul>
                            <li>hi@zetapp.in</li>
                            <li>+91-7417274072</li>
                        </ul>
                    </div>

                    <div className="col_f">
                        <h4>SOCIAL</h4>
                        <div className="socials">
                            <Image src="/images/ln.svg" width={40} height={40} className="float-left"/>
                            <Image src="/images/inst.svg" width={40} height={40} className="float-left"/>
                            <Image src="/images/fb.svg" width={40} height={40} className="float-left"/>
                            <Image src="/images/tel.svg" width={40} height={40} className="float-left"/>
                            <Image src="/images/wa.svg" width={40} height={40} className="float-left"/>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
      
    </div>
  )
}

export default Last
