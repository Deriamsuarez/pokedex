import React from 'react'

const Search = ({action, name, placeholder}) => {


    return (
        <form onSubmit={action}  className="input__container">
            <input id='name' type="text" placeholder={placeholder} />
            <button type='submit' className='buttonName' >{name}</button>
        </form>
    )
}

export default Search