import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [InputValue, setInputValue] = useState('');
  
  // Estamos destructurando el event por target para no tener que colocar event
  const onInputChange = ({target}) =>{
    setInputValue(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    if( InputValue.trim().length <=1) return;
    
    // PRIMERA FORMA
    // setCategories(categories =>[InputValue, ...categories]);
    
    onNewCategory(InputValue.trim());
    setInputValue('');
    

  }


  return (

    <form onSubmit={  onSubmit }>

            <input
                type="text"
                placeholder="Buscar gift"
                value = {InputValue}
                onChange ={ onInputChange}
            />
    </form>
      
   
  )
}

export default AddCategory
