import React, { useState } from 'react';
import './Style.css';

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
    
    <div className="body">
    <div className='wrapper'>
      <div className='form-box login'>
        <h2>Connexion</h2>

        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <span className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>Email</label>  
          </div>
          <div className='input-box'>
            <span className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              </svg>
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label>Mot de passe</label>  
          </div>



          </form>
            <div className='connexion'>
                <button className='btn' type="submit">Se connecter</button>
            </div>
            <div className='pasdecompte'>
                <h6>Pas de compte ? <a className='inscription' href="/Inscription">Inscrivez-vous.</a></h6>
            </div>
        </div>
    </div>
    </div>
      
    
    
    </>
  );

  
};



export default ConnexionPage;