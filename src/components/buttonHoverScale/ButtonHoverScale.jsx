import React from 'react'
// import scss
import "./ButtonHoverScale.scss"
// import icons
import { BsArrowRight } from 'react-icons/bs';
import { BsChatRightText } from 'react-icons/bs';


function ButtonHoverScale() {
  return (
	<>
		<button className='btn-hover-scale'>
			<span className='different-icon'><BsChatRightText/></span>
			<span className='btn-name'>click me</span>
			<span className='right-icon'><BsArrowRight/></span>
		</button>
	</>
  )
}

export default ButtonHoverScale
