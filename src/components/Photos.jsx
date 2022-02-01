import React from 'react';
import PhotosItem from './PhotosItem';

const Photos = ({data}) => {
  return <div className='flex'>
      {data.map(el=>(
          <PhotosItem
          key = {el.id}
          id = {el.id}
          title = {el.title}
          url = {el.url}
          />
      ))}
      
  </div>;
};

export default Photos;
