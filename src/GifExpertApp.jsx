import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp=()=>{

    const [categories, setCategories] = useState(['fernando alonso', 'lionel messi'])

    const onAddCategory=(newCategory)=>{
        if ( categories.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory,...categories]);
    }

    return (
        <>           
            <h1>Gif Expert App Fausto Calviño</h1>          
            <AddCategory                  
                onNewCategory={ (value)=> onAddCategory(value.toLowerCase()) }
            />                  
            
            {categories.map((category)=>
                (
                    <GifGrid key={ category } category={ category }/>
                )
            )}
                
                     
        </>
    )
}