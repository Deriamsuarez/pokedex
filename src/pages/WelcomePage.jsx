import React from 'react'
import Search from '../components/Search'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import { Navigate } from 'react-router-dom'


const WelcomePage = () => {

    const trainer = useSelector(state => state.trainerName)
    const dispatch = useDispatch()

    const handleNameTrainerSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()
        if(inputValue !== 0){
            dispatch(setNameTrainer(inputValue))  
        }
        e.target.name.value = ''
    }

   
    
    if(!trainer){
        return (
            <div className='welcome_page__container'>
                <div className="welcome__container">
                    <img src="pokedex_logo.png" alt="" />
                    <span className='hello'>¡Hola entrenador!</span>
                    <p>Para poder comenzar, dame tu nombre</p>
                    <Search action={handleNameTrainerSubmit} name={'Comenzar'} placeholder={'Tu nombre...'}/>
                </div>
                <Footer />
            </div>
        )
    }else{
        return <Navigate to='/' />
    }
}

export default WelcomePage