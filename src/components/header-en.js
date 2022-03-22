import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6  bg-white">
      <div className="flex items-center flex-shrink-0 mr-6 text-gray-800 mx-auto">
        {/* <span className="text-xl font-semibold tracking-tight">
          {siteTitle}
        </span> */}
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
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 mr-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-800"
          >
            Location
          </Link>
          {/* <Link
            to={`/page-2`}
            className="block mt-4 mr-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-800"
          >
           
          </Link> */}
          <Link
            to={`/contact`}
            className="block mt-4 mr-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-800"
          >
            Reserve a spot
          </Link>

          <Link
            to={`/`}
            className="block mt-4 mr-4 text-gray-800 lg:inline-block lg:mt-0 hover:text-gray-800"
          >
            / Macedonian
          </Link>
        </div>
        <div></div>
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
