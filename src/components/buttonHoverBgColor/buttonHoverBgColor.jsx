import React from 'react'
// import style scss
import "./buttonHoverBgColor.scss"

function ButtonHoverBgColor({name}) {
  return (
	<>
	  <a className='bg-color-change' href="">{name}</a>
	</>
  )
}

export default ButtonHoverBgColor
