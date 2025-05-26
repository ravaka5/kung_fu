
const Page7 = () => {
    return (
        <section className='w-screen h-screen flex justify-center items-center text-center'>
            <div>
                <div className='font-poppins text-[4vw] text-red-700'>
                    <h1>Où nous trouver ?</h1>
                </div>
                <div className='w-screen px-[6vw] h-[24vw] mt-[2vw]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4154.9463955132705!2d46.73603920000001!3d-19.025615300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fb23e058efb66b%3A0x44fca43857889e53!2sKung%20Fu%20Hotel!5e1!3m2!1sen!2smg!4v1743451677416!5m2!1sen!2smg"
                        className='rounded-2xl w-[100%] h-[100%]'
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}
export default Page7
