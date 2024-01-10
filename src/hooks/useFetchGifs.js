import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await  getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

// RETORNA LAS IMAGENES DEL ARCHIVO GETGIS
    useEffect(() => {
      getImages();
     
 },[]);
 


 
  return {

    // images:images,
    images,
    isLoading

  }
    
    
}


