import React from 'react'

const Heading_Subheading = (props) => {
  return (
    <div className='text-center mb-5'>

        <h1 style={{fontWeight:'700'}}>{props.heaading}</h1>
        <p style={{fontWeight:'100'}}>{props.sub_heaading}</p>

    
    </div>
  )
}

export default Heading_Subheading