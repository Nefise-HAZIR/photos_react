import React from 'react'
import "./imageList.css"
import Image from './Image';

const imageList = ({images}) => {
   const preparedImageList=images.map(image=>{
        return(
            // <img key={image.id} src={image.urls.small} alt="" />
            <Image  key={image.id} image={image}/>
        );
   });
  return (
    <div className='imageList-container'>
      {preparedImageList}
    </div>
  )
}

export default imageList;
