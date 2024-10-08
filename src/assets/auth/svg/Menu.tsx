import React from 'react'

const Menu = () => {
  return (
    <div>
        <button className="text-white focus:outline-none">
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="#fff"  stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
    </div>
  )
}

export default Menu