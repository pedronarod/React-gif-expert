
import {useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";

export const UseFetchGifs = (category) => {

      const [images, setimages] = useState([])
      const [isLoading, setIsLoading] = useState(true)

     const getImages = async() =>{
          const newImages = await getGifs(category);
          setimages(newImages);
          setIsLoading(false);
      }

  useEffect(()=>{
      getImages(category);
  },[])

return {
    images:images,
     isLoading
}

}
