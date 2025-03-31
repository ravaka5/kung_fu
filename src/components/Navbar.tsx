import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute w-screen top-10'>
        <div className='text-lg flex w-full h-16 bg-white items-center justify-around px-[10%]'>
        <div>
            <Link to="/" >
                <p className='font-noto-serif'>Accueil</p>
            </Link>
        </div>
        <div>+</div>
        <div>
            <Link to="/restaurant">
                <p className='font-noto-serif'>Restaurant</p>
            </Link>
        </div>
        <div>+</div>
        <div>
            <Link to="/room">
                <p className='font-noto-serif'>Chambres</p>
            </Link>
        </div>
        <div>+</div>
        <div>
            <Link to="/events">
                <p className='font-noto-serif'>Evenements</p>
            </Link>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar
