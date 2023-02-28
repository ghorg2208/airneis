import Caroussel from "../back/Caroussel";

const Produit = () => {
    const images = [
        'https://picsum.photos/1200/300?random=1',
        'https://picsum.photos/1200/300?random=2',
        'https://picsum.photos/1200/300?random=3'
      ];

    return (
    <div className="mt-0 mb-5">
        <div>
            <img src='https://picsum.photos/1200/300?random=1' alt="image produit"/>
        </div>
        <div className="mt-3 container">
            <div className="row">
            <div className="text-center mx-0 col-6">
                <Caroussel images={images} />
            </div>
            <div className="col-6">
            <div className="d-flex justify-content-between">
                <h3>1200 ${/** Prix du Produit*/}</h3>
                <h3>NOM DU PRODUIT {/** Nom du Produit*/}</h3>
            </div>
            <div className="d-flex justify-content-end">
                <h5 className="text-secondary">En Stock {/** Booléen Produit en Stock*/}</h5>
            </div>
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            </div>
            </div>
        </div>
    </div> );
}
 
export default Produit;