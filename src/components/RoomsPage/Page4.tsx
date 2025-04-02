import img1 from "../../assets/img/room/Page4/img1.jpeg"

const Page4 = () => {
  return (
    <section className='h-screen w-screen flex flex justify-center gap-[4vw] items-center '>
      <div className="absolute flex bottom-[28%] w-screen h-[36vh] bg-red-500 z-[-1]"></div>
      <div>
            <img src={img1} alt="room" className="h-[38vw] w-[24vw] rounded-2xl object-cover object-center"></img>
        </div>
        <div className="flex flex-col  ">
            <h1 className="text-[2vw] uppercase font-bold text-red-700 text-center">
            Un room service Impeccable
            </h1>
            <div className="relative">
              <p className="text-[1.4vw] my-[6vw] text-white font-semibold">
              Profitez d'un room service <br/>
              irréprochable, alliant rapidité et<br/>
              élégance. Savourez des plats <br/>
              exquis, servis avec soin dans <br/>
              leconfort de votre chambre. <br/>
              Un service dédié à votre satisfaction <br/>
              et à votre confort absolu.
              </p>
            </div>
        </div>
    </section>
  )
}

export default Page4
