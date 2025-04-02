import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import img1 from "../../assets/img/room/Rooms1.jpeg"
const Page1 = () => {
  return (
    <section className='h-screen w-screen flex justify-center items-center gap-[2vw]'>
        <div>
            <img src={img1} alt="room" className="h-[38vw] w-[24vw] rounded-2xl object-cover object-center"></img>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[2.4vw] font-bold text-red-700 text-center">Detendez-vous dans le <br/>
            confort de nos <br/>chambres </h1>
            <p className="text-[1.4vw] text-center py-[1vw] w-[26vw]">
            Profitez d'un espace raffiné alliant élégance et confort. 
            Que ce soit pour un séjour romantique ou en famille,
            nos chambres vous garantissent repos et sérénité absolue.
            </p>
            <div className="flex w-full justify-center ">
                <button className="bg-gray-100 rounded-full animate-bounce mt-[2vw]">
                    <MdOutlineKeyboardArrowDown className=" w-[3vw] h-[3vw]" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Page1
