import React from 'react'
import page1 from '../../assets/img/homepage/page1.png'
import page1_2 from '../../assets/img/homepage/Rectangle 50.png'


const Page1 = () => {
  return (
    <section className='w-screen h-screen flex flex-row'id='test'>
        <div className='w-900 flex justify-center'>
          <div>
            <img className='h-full' src={page1}/>
          </div>          
        </div>
        
        <div className='flex flex-col justify-center'>
          <div>
            <div className='ps-6 pb-14 text-red-700'>
              <h3 className='text-[22px]'>L'expérience inoubliable d'Ampefy,</h3>
              <h1 className='text-[42px] font-semibold'>Bienvenue au Kung Fu Hotel</h1>
              <h2 className='text-[28px]'>Ampefy, Ankorondrano 🏮</h2>
            </div>
            
            <div>
              <p className='text-[22px] text-justify'>
              En route vers l'inattendu, le Kung Fu Hotel 
              se révèle comme un sanctuaire d'émotions où 
              chaque instant se réinvente, tel un conte réécrit
              mille fois, ne laissant derrière lui qu’un écho 
              mystérieux. Ici, les murmures d’histoires anciennes 
              se mêlent aux rires complices, invitant chacun à retrouver 
              l’essence de la convivialité.
              <br/>
              <br/>
                Niché à Ampefy, Ankorondrano et ouvert depuis 2021,
                le Kung Fu Hotel vous accueille 24h/24, 7j/7 pour\
                des expériences uniques. Savourez notre menu fusion, 
                mariant subtilement saveurs chinoises et malgaches, 
                défiez vos amis sur notre terrain de basket,
                  ressourcez-vous dans notre piscine ou plongez 
                  dans l’univers ludique de notre game room.
              </p>
            </div>
          </div>

            
        </div>
        <div className='w-200 pe-20 relative top-140 right-28'>
          <img src={page1_2}/>

        </div>
      </section>
  )
}

export default Page1
