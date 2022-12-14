import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading }=useFetchGifs( category );

    return (
        <>
            <h3 className="category-title"> { category } </h3>  
            { 
                isLoading && ( <h2>Cargando...</h2> )                
            }

            <div className="card-grid">

                {
                    images.length>0 ?                                            
                    images.map( ( image ) => ( 
                        <GifItem 
                        key={ image.id }                           
                        { ...image }                            
                    />)) : <p className="error-text">No se han encontrado GIFS para {`"${category}"`}</p>                
                        
                    
                }
            </div>
        </>
    )
}
