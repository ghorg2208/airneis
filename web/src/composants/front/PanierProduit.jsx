const PanierProduit =({qty}) => {
 return <div className="d-flex gap-3 mb-5">
    <div className="image w-25">
        <img src="Wrench.jpeg" class="img-fluid" />
    </div>
    <div className="w-50">
        <h2>NOM PRODUIT</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="w-25">
        <p>1200€</p>
        <input type= "text" class="w-25 gap-3 mb-3" value={qty}/>
        <i class="bi bi-trash d-flex flex-column "></i>
    </div>


    </div>;
}

export default PanierProduit;