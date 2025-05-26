const Page4 = () => {
    return (
        <section className='w-screen h-screen flex justify-center items-center'>
            <div className="flex flex-col gap-[1vw] text-red-700">
                <div>
                    <h1 className='text-[3.6vw] text-center font-bold font-noto-serif'>Que faire d&apos;autre ?</h1>
                    <p className='text-[1.2vw] text-center font-poppins'>Le kung fu hotel propose divers activités pour les invités</p>
                </div>
                <hr />
                <div className="flex gap-[2vw] text-white font-bold text-center font-poppins">
                    <div className="w-[24vw] px-[2vw] py-[1vw] h-[30vw] flex items-end justify-center rounded-[1.4vw]" style={{ backgroundImage: `url("/assets/events/ball.png")` }}>
                        <p className="text-[1.1vw]">AMUSEZ VOUS AVEC VOS AMIS SUR NOTRE TERRAIN DE BASKETBALL</p>
                    </div>
                    <div className="w-[24vw] px-[2vw] py-[1vw] h-[30vw] flex items-end justify-center rounded-[1.4vw]" style={{ backgroundImage: `url("/assets/events/piscine.png")` }}>
                        <p className="text-[1.1vw]">RELAXEZ VOUS DANS L’EAU DE NOTRE PISCINE</p>
                    </div>
                    <div className="w-[24vw] px-[2vw] py-[1vw] h-[30vw] flex items-end justify-center rounded-[1.4vw]" style={{ backgroundImage: `url("/assets/events/gaming.png")` }}>
                        <p className="text-[1.1vw]">AMUSEZ VOUS DANS NOTRE SALLE DE JEU</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page4
