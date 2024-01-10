import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    //CUSTOM HOOK PERSONALIZADO
    const {images, isLoading} =  useFetchGifs(category);

   



  return (
    <>
    
        <h3>{category}</h3>
        {
            // PRIMERA FORMA
            // isLoading
            // ? (<h2>Cargando...</h2>)
            // : null
            
            // SEGUNDA FORMA
            //si isloading es true entonces va ejecutar
             isLoading && (<h2>Cargando...</h2>)
            
            

        }
        
        <div className='card-grid'>
            {/* {
                images.map(image => (
                    <li key = { image.id}> {image.title}</li>
                ))
            } */}

             {/* ESTAMOS MOSTRANDK EL ID Y EL TITULO IMAGENS EN CADA CATEGORIA */}
            {
                images.map((image) => (
                    // <li key = { id}> {title}</li>
                    <GifItem 
                        key={ image.id } 
                        //Estamos esparciendo las propiedades que tiene image
                        { ...image }
                        
                        />
                ))
            }
                       
            
        </div>

    </>
  )
}


