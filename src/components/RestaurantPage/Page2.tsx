import family from "../../assets/img/restaurant/family.jpeg"
import couple from "../../assets/img/restaurant/couple.jpeg"

const Page2 = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center mt-[4vw]'>
      <div className="flex justfy-center items-center text-red-700">
        <div className="w-[25vw]">
            <img src={family} alt="family" className="h-[36vw] object-cover object-center"></img>
        </div>
        <div>
            <div className="ms-[2vw]">
                <h1 className="text-[2vw] font-bold uppercase">
                Passez un moment inoubliable 
                <br/>
                a deux ou en famille
                </h1>
                <p className="text-[1.4vw]">
                Savourez des instants gourmands à deux ou en
                <br/>
                famille, dans une ambiance chaleureuse et conviviale.
                </p>
            </div>
            <div>
                <img src={couple} alt="family" className="h-[24vw] ms-[2vw] mt-[2vw] object-cover object-center"></img>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Page2
