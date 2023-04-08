import { useState , useEffect } from "react";
import axios from "axios"

export function useProduit(){
    const [produits, setProduits] = useState([])
    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}produits.json`)
         .then( reponse => {
            const resultat = []
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
            }
            setProduits(resultat)
            //console.log(resultat);
         })
    } , [produits.length] ) // exécute que lorsque la page est chargé et update



    return [produits, setProduits]  ; 
}