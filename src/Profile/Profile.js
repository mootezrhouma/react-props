import React from 'react'
import Handlename from './Handlename'
import PropTypes  from 'prop-types'

function Profile({fullName,bio,profession,alert})  {
  return (
    <div className='body'>
         <Handlename/>
        <div className ='fullname'> 
        {fullName}
        
       
        
        </div>
        <div className='bio'> 
        <h1>BIO :</h1>
        {bio}
        </div>
        <div className='profession'>
        <h1>PROFESSION :</h1>
        {profession}
        </div>
        {alert()}
      

        
    </div>
    
    
  
    
  )

}


export default Profile