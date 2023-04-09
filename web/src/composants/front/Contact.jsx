import {useRef} from "react"
import { contactVerif } from "../../verif/liste";
import Alert from "../Alert";
import { useAlert } from "../../hook/useAlert";

const Contact = () => {
    const emailRef = useRef();
    const messageRef = useRef();
    const sujetRef = useRef();
    const [alerte , setAlerte , getError] = useAlert(contactVerif)
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    const handleFocus = () => {
        setAlerte({});
    }

    return (
    <>
        <h1 className="text-center">Nous contacter</h1>
        <p>Pour nous contacter, veuillez compléter le formulaire suivant :</p>
        <div className="row">
            <form onSubmit={handleSubmit} className="col-12">
                <input type="email" 
                    placeholder="Votre@email.fr"  
                    className="form-control mb-3" 
                    ref={emailRef}
                    onFocus={handleFocus}/>
                <input type="text" 
                    placeholder="Sujet"  
                    className="form-control mb-3" 
                    ref={sujetRef}
                    onFocus={handleFocus}/>
                <textarea  
                    placeholder="Votre message" 
                    className="form-control mb-3" 
                    rows={5} 
                    ref={messageRef}
                    onFocus={handleFocus}></textarea>
                <div className="d-flex justify-content-center"><input type="submit" className="btn btn-dark" /></div>
            </form>
        </div>
        
        <Alert alerte={alerte} />
    </>
    );
}
 
export default Contact;
