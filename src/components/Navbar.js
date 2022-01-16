import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center h-32 bg-white text-black relative shadow-md font-mono rounded-b-xl w-screens' >
                <div>
                    <Link to="/" className="pl-8 flex flex-row flex-wrap w-full h-auto justify-center -py-2 ">
                    <div className="">
                        <img src={logo} alt='#' />
                    </div>
                    <div>
                        <p className="text-xl pt-1 px-10">CheapShark</p>
                    </div>
                </Link>
                </div>
                <div className='pr-8 md:block  hidden float-right '>
                    <Link to='/' className='p-4'>
                    Deals
                    </Link>
                    <Link to='/menu' className='p-4'>
                    Games
                    </Link>
                    <Link to='/about' className='p-4'>
                    Stores
                    </Link>
                </div>
            </nav>

            <nav className='fixed bottom-0 inset-x-0 flex h-16 justify-center font-mono rounded-t-xl px-4 md:hidden shadow-inner p-4 bg-gray-50' >
                <div className='pr-8 '>
                    <Link to='/' className='p-4'>
                    Deals
                    </Link>
                    <Link to='/menu' className='p-4'>
                    Games
                    </Link>
                    <Link to='/about' className='p-4'>
                    Stores
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
