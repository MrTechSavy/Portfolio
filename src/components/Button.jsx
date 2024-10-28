import React from 'react'
import { contain } from 'three/src/extras/TextureUtils.js'

const Button = ({value, isBeam=false, containerClass}) => {
  return (
    <div className={`btn ${containerClass}`}>
        {isBeam && (
            <span className='relative flex h-3 w-3'>
                <span className='btn-ping'/>
                <span className='btn-ping_dot'/>
            </span>
        )}
        {value}
    </div>
  )
}

export default Button