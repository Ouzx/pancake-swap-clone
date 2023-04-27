import React from 'react'
import "./Slide1.scss";

const Slide1 = () => {
  return (
    <div className='slide-container-1'>
        <div className="slide-outer">
            <div className="slide-inner-1">
                <h2 className='slide1-1'>Perpetual Futures</h2>
                <h2 className='slide1-2'>Up to 100× Leverage</h2>
                <a href="3">
                    <button>
                        <div>Trade Now</div>
                    </button>
                </a>
            </div>
            <div className="slide-inner-2">
                {/* <span>
                    <span>
                       <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27208%27%20height=%27208%27/%3e" aria-hidden= "true" alt="-" /> 
                    </span>
                    <img srcSet="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&w=256&q=75" alt="slide1(5)" />
                </span> */}
                 <img srcSet="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&w=256&q=75" alt="slide1(5)" />
            </div>
        </div>
    </div>
  )
}

export default Slide1;