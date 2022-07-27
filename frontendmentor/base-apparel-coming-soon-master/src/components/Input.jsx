import React, {useState} from 'react'

const Input = () => {
    const [getInput, setGetInput] = useState('')
    const [isEmpty, setIsEmpty] = useState('')
    const [error, setError] = useState('')
    const handleChange = (e) => {
        setGetInput(e.target.value)
      }

      const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const handleIsEmpty = () => {

        if((getInput.trim().length == 0) || !isValidEmail(getInput)) {
          setIsEmpty('Please provide a valid email')
          setError('error')
        } 
      }
    return(
        <div className= {`coming-soon__input ${error}`}>
            <input type='text' placeholder='Email Address' onChange={handleChange} />
            <button className='coming-soon__input__button' onClick={handleIsEmpty}></button>
                <div className='coming-soon__input__error'>
                    {isEmpty === 'Please provide a valid email' &&
                        isEmpty
                    }
                </div>
        
        </div>
        
    )
}

export default Input