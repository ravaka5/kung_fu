import React from 'react'
import Card from '../Card'
import page1_2 from '../../assets/img/homepage/Rectangle 50.png'

const Page4 = () => {
  return (
    <section className='w-screen h-screen flex-row justify-center items-center'>
        <div className='text-center font-poppins py-10 text-red-700'>
        <p className='text-[22px]'>Nos offres</p>
        <h1 className='text-[72px]'>Liberez le plaisir !</h1>
        <p className='text-[22px]'>Des mariages aux seminaires, nous avons tout ce qu'il
            <br/>
            vous faut!
        </p>
        </div>
        <div className='flex justify-around px-40'>
        <Card
        title='mariage'
        subtitle='Célébrations de rêve !'
        content='Épousez-vous avec style et élégance !'
        imgUrl={page1_2}
        />
        <Card
        title='Evenements'
        subtitle='Espace seminaire'
        content="Parfait pour des rassemblements d'entreprise et des ateliers !"
        imgUrl={page1_2}
        />
        <Card
        title='Loisirs'
        subtitle='Activités amusantes'
        content='Le basket, la piscine et les jeux vous attendent !'
        imgUrl={page1_2}
        />
        </div>
    
  </section>
  )
}

export default Page4
