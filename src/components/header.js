import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6  bg-white">
      <div className="flex items-center flex-shrink-0 mr-6 text-gray-800 mx-auto">
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-gray-800 border border-gray-800 rounded hover:text-gray-800  hover:border-gray-800"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg container mx-auto items-center text-center font-bold">
          <div className="block mt-4 mr-4 text-gray-800 lg:inline-block lg:mt-0 "
          ><a href="https://goo.gl/maps/wGyno8UJjkjUiwdV8" target="_blank" rel="noreferrer"  className="text-gray-800 lg:inline-block hover:text-amber-500">
            Локација на ресторантот
        </a>
          </div>
         
          <Link
            to={`/index-en`}
            className="block mt-4 mr-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-amber-500"
          >
            / Englisch
           
          </Link>

         <div className="block mt-4 mr-4  lg:inline-block lg:mt-0 bg-white border-2 border-amber-500 px-5 "
          ><a href="https://drive.google.com/drive/folders/14LFF_V_2fp7bfHYqUd-fJKgljmKZvP_n?usp=sharin8" target="_blank" rel="noreferrer"  className="text-gray-700 lg:inline-block hover:text-amber-500">
            Споделете фотографии
        </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
