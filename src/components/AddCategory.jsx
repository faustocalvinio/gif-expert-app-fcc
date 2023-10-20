import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange=(event)=>{
        setInputValue( event.target.value )
    };
    const onSubmit=(event)=>{
        event.preventDefault();
        if( inputValue.trim().length<=1 )return;
        onNewCategory( inputValue.trim() )
        setInputValue('');
    };

    return (
        <>        
            <form onSubmit={ onSubmit }>
                <input 
                    className="category-input"
                    type="text" 
                    placeholder="Buscar Gifs"
                    value={ inputValue }   
                    onChange={ onInputChange } 
                />
            </form>
            <span className="tip-search">
                Type a name and press Enter to search a new category
            </span>
        </>
        
    )
}
