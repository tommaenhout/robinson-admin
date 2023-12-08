import {useState, useEffect} from 'react';

const useValidation = (fn, valueToValidate, validation) => {
    const [error, setError] = useState('')

    useEffect(() => {
        const regex = validation.regex;
        if (regex.test(valueToValidate) || valueToValidate === '') {
          const validValue = valueToValidate.toLowerCase()
          fn(validValue)
          setError('')
        }else {
          valueToValidate && setError(validation.message)
        }
    }, [valueToValidate])

    return {error}
}


export default useValidation;