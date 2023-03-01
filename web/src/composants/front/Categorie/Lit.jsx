import { useState } from "react";
import React from 'react'

const Categorie = () => {
console.log("Lit")
return (
<>
<div className="text-center mb-5">
    <img src={'https://picsum.photos/1200/300?random=${id}'} />
</div>
<div className="text-center">
    <h3>Description Description</h3>
</div>
<div className="text-center mt-5 mb-5 container-fluid">
    <div className="row justify-content-center">
    <div className="col-4 mb-5 align-items-center" >
            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={"https://picsum.photos/800/600?random=2"} />
            <div className="mt-3 d-flex justify-content-between">
                <h4>NOM PRODUIT</h4>
                <h4>1200€</h4>
            </div>
        </div>

        <div className="col-4 mb-5 align-items-center" >
            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={"https://picsum.photos/800/600?random=2"} />
            <div className="mt-3 d-flex justify-content-between">
                <h4>NOM PRODUIT</h4>
                <h4>1200€</h4>
            </div>
        </div>

        <div className="col-4 mb-5 align-items-center" >
            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={"https://picsum.photos/800/600?random=2"} />
            <div className="mt-3 d-flex justify-content-between">
                <h4>NOM PRODUIT</h4>
                <h4>1200€</h4>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default Categorie;