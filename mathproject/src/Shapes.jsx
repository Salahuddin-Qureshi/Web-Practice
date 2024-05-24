import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Shapes.css'

function Shapes() {

    const [count, setCount] = useState(0)
    return (
        <>
        <div>
          <h1>Circle</h1>
          <div className="circle">dsf</div>
          <h1>Rectangle</h1>
          <div className='rect'>cvc</div>  
          <h1>Square</h1>
          <div className='square'>cvc</div>  
                    
      </div>
        </>
    )
}


export default Shapes