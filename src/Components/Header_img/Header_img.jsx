import React from 'react'

import header_img from '../../Assets/Img/Header_image.png'

const Header_img = () => {
  return (
    <>

    <div class="container-fluid text-center mb-5 pb-5">

        <div class="row">
            

            <div className="col-12 header_img">

                <img src={header_img} alt="" className='img-fluid ' />
                
            </div>
            
        </div>
        
    </div>
    
    </>
  )
}

export default Header_img