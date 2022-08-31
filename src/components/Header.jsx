import React from 'react'

const Header = () => {
  return (
    <div className='header_container'>
    <div className="header__img_container">
      <img id='logo' src="pokedex_logo.png" alt="" />
        <img  className='circle_ball' src="circle_welcome.svg" />
    </div>
    <div className='black__line' />
</div>  )
}

export default Header