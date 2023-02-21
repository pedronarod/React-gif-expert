 
import { UseFetchGifs } from '../hooks/UseFetchGifs';
import { GiftItem } from './GiftItem';


export const GifGrid = ({category}) => {
 
 
 
    const  { images, isLoading} = UseFetchGifs(category)
   
    
    return (
    <>
        <h3>{category}</h3>
        
        {
            isLoading ? (<h2>Cargando...</h2>) : (null)
        }
         {
            isLoading && <h2>Cargando...</h2>
        }
      
        <div className="card-grid">
            
            {
                
                images.map((image) =>(
                    <GiftItem {...image}  key={image.id}  />

                             
                ))
            }
            
        </div>
    </>
  )
}
