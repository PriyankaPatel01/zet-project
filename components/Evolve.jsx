import Image from "next/image";
const Evolve = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h3 className="text-3xl font-bold dark:text-white">How we evolved over the years</h3>
      <br />
      <br />
      <Image src="/images/g1.webp" alt="image description" width={5500} height={5500}/>
    </section>
  )
}

export default Evolve
