import React, { useState } from "react";
import Carousel from 'better-react-carousel'
import { NavLink , useNavigate } from "react-router-dom"


const Accueil = () => {
  const url = `/Categorie/`
  return (
    <>
    <br />
      <div className="text-center">
        <Carousel cols={1} rows={1} gap={10} loop autoplay={5000}>
          <Carousel.Item>
            <img
              width={500}
              src="https://picsum.photos/800/600?random=1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={500}
              src="https://picsum.photos/800/600?random=2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={500}
              src="https://picsum.photos/800/600?random=3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-center mt-3 mb-5 container-fluid">
  <h3>
    Venant des hautes terres d'écosse <br/> nos meubles sont immortels
  </h3>
  <div className="row">
    <div className="col-md-4 mb-5">
      <NavLink to={url+"Table"}>
        <img width={300} src={"https://picsum.photos/800/600?random=1"} />
      </NavLink>
    </div>
    <div className="col-md-4 mb-5">
      <NavLink to={url+"Meuble"}>
        <img width={300} src={"https://picsum.photos/800/600?random=1"} />
      </NavLink>
    </div>
    <div className="col-md-4 mb-5">
      <NavLink to={url+"Lit"}>
        <img width={300} src={"https://picsum.photos/800/600?random=1"} />
      </NavLink>
    </div>
  </div>
</div>
    </>
  )
}

export default Accueil;