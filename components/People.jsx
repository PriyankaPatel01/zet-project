import Image from "next/image"
const People = () => {
  return (
    <div className="diag">
      <Image src="/images/peeps1.webp" width={700} height={700} className="peep float-left"/>
      <div className=" flex-center xet">
        <p className="font-bold">THE ZET EFFECT</p>
        <br />
      </div>
        <div id="slider">
					  <figure >
              <p>We helped customers in more than 50 cities to get their first financial product.</p>
              <p>More than 20 Cr earned by our Agents by selling Credit Cards and loans.</p>
              <p>14 Lakhs+ Financial Advisors across India are using ZET to increase their income.</p>
					  </figure>
				</div>
      
    </div>
  )
}

export default People
