import page1_3 from '../../assets/img/homepage/Rectangle8.jpeg'

const Page3 = () => {
  return (
    <div className='w-screen h-screen flex-row justify-center items-center'>
        <div className='flex justify-center items-center h-screen text-center'>
          <div className='h-fit border-1 bg-center bg-fixed bg-cover w-screen py-[4vw] text-white'style={{ backgroundImage: `url(${page1_3})` }} >
          <div>
            <h1 className='text-[72px]'>Kung Fu Hotel</h1>
            <h2 className='text-[22px]'>Votre oasis evenementiel a Madagascar</h2>
          </div>
          <div>
            <p className='text-[48px]'>
            Plongez dans le luxe , le plaisir
            <br/>
            et des experiences inoubliables !
            </p>
          </div>
          </div>
        </div>
        
      </div>
  )
}

export default Page3
