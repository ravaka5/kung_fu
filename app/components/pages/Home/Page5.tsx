import Slider from "@/app/components/ui/Slider"

const Page5 = () => {
    return (
        <section className='w-screen h-screen flex justify-center items-center text-center'>
            <div>
                <div className='text-red-700 font-poppins'>
                    <h1 className='text-[4vw]'>
                        Délices culinaires
                    </h1>
                    <p className='text-[1.3vw] font-light'>
                        Savourez le meilleur de la cuisine malgache et chinoise, où chaque bouchée <br />
                        est un véritable voyage gustatif ! Vos papilles vous remercieront !
                    </p>
                </div>

                <div>
                    <Slider />
                </div>
            </div>
        </section>
    )
}

export default Page5
