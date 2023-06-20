import Image from "next/image";


function Features() {
  return (
    <section>
      <h3 className="text-3xl font-bold dark:text-white">Got Featured</h3>
      <br />
      <br />

      <div class="row">
        <div class="column">
          <Image src="/images/Economic.webp" alt="TEC" width={200} height={200}/>
        </div>
        <div class="column">
          <Image src="/images/Inc42.webp" alt="Inc" width={200} height={200}/>
        </div>
        <div class="column">
          <Image src="/images/mint.webp" alt="mint" width={200} height={200}/>
        </div>
        <div class="column">
          <Image src="/images/YourStory.webp" alt="mint" width={200} height={200}/>
        </div>
        <div class="column">
          <Image src="/images/BusinessStandard.webp" alt="mint" width={200} height={200}/>
        </div>
    </div>
    </section>
  )
}

export default Features
