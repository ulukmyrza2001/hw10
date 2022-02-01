import React from 'react'

const PhotosItem = (props) => {
	return (
		<div className='photos'>
			<div className='idStyle'>
				<h1>{props.id}</h1>
			</div>
			<img src={props.url} alt='' />
			<h2>{props.title}</h2>
		</div>
	)
}

export default PhotosItem
