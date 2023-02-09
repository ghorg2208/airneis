import { useContext } from "react";
import React from 'react'
import Carousel from 'better-react-carousel'

const Accueil = () => {
    // your custom dot component with prop `isActive`
    const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '8px' : '5px',
        width: isActive ? '8px' : '5px',
        background: '#1890ff'
      }}
    ></span>
  )
  
  // set custom dot
  
  return (
      <>
    <div class="text-center">
    <Carousel cols={1} rows={1} gap={10} loop autoplay={5000}>
      <Carousel.Item>
        <img width={500} src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel dot={MyDot} />
    </Carousel >
    </div>
    <div className="text-center mt-3 mb-5 container-fluid">
        <h3>Venant des hautes terres d'écosse <br/> nos meubles sont immortels</h3>
        <div className="row">
            <img className="mb-5 col-4" src="https://picsum.photos/800/600?random=4" />
            <img className="mb-5 col-4" src="https://picsum.photos/800/600?random=5" />
            <img className="mb-5 col-4" src="https://picsum.photos/800/600?random=6" />
        </div>
    </div>
    </>
  )
}
 
export default Accueil;