import React from 'react'

export default (props) => (
	<div
		className='cover'
		// style={{
		// 	position   : 'absolute',
		// 	zIndex     : 100,
		// 	top        : 0,
		// 	left       : 0,
		// 	height     : '100vh',
		// 	width      : '100vw',
		// 	background : props.background || 'red'
		// }}
		{...props}
	/>
)
