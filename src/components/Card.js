import React from 'react'

function Card() {
    return (
        <div className='rounded overflow-hidden shadow-sm rounded-xl p-4 ml-10 px-6 py-4 bg-gray-50 mb-4 md:w-3/12 mr-10 ml-4 mb-10'>
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <div className="flex inline-block">
                <p className="text-gray-700 text-base font-sans">
                $500
                </p>
                <p className="text-green-700 text-base font-sans pl-4">
                $500
                </p>
            </div>
            <button className="bg-transparent hover:bg-black text-black-700 hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded mt-4">
                View More
            </button>
        </div>
    )
}

export default Card
