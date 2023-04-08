import { useState , useEffect } from "react";
import axios from "axios"

export function useCategories(){
    const [categories, setCategories] = useState([])
    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}categories.json`)
         .then( reponse => {
            const resultat = []
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
            }
            setCategories(resultat)
            //console.log(resultat);
         })
    } , [categories.length] ) // exécute que lorsque la page est chargé et update



    return [categories, setCategories]  ; 
}