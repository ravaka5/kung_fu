import React from "react";
interface AnimatedCardProps
{
    header: string;
    description: string;
    price: string;
    imgUrl: string
}
const AnimatedCard:React.FC<AnimatedCardProps> = ({header,description,price,imgUrl}) => {
  return (
    <div className="flex items-center justify-center font-poppins">
        <div className="group relative items-center justify-center rounded-4xl overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow cursor-pointer">
      <div className="h-[28vw] w-[28vw]">
        <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-800" src={imgUrl}/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

      </div>
      <div className="absolute  inset-0 flex flex-col items-center justify-center text-center translate-y-[-30%] group-hover:translate-y-0 transition-all">
        <h1 className="text-[1.8vw] font-bold text-white">{header}</h1>
        <div className="text-[1.4vw] text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="border-1 px-[2vw]">
                <p>
                    {price} / nuitée
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
      </div>
    </div>
    </div>
    
  ) 
}

export default AnimatedCard
