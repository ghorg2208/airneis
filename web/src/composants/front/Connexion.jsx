import React, { useState } from 'react';
//import './Style.css';
import './StyleTempo.css';

const ConnexionPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici le code pour traiter le formulaire d'inscription
    console.log(formData);
  };

  return (
    <>
    
    
    <div className='body2'>
      <div className='box'>
        <form>
          <h2>Connexion</h2>

          <div className="inputBox">
            <input type="email"
              name="email"
              required="required"
              value={formData.email}
              onChange={handleInputChange} />
            <span>Email</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password"
              name="password"
              required="required"
              value={formData.password}
              onChange={handleInputChange}/>
            <span>Mot de passe</span>
            <i></i>
          </div>

          <div className="links">
            <a href="#">mot de passe oublié</a>
            <a href="#">pas de compte ?</a>
          </div>
          
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
      
    
    
    </>
  );

  
};



export default ConnexionPage;