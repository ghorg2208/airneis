import React, { useState } from 'react';

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
    <div>
        <div className='my-3 text-center'>
            <h1>Connexion</h1>
        </div>
      <form onSubmit={handleSubmit}>

        <div className='my-3 text-center'>
            <label>
            <h6>Email:</h6>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            </label>
        </div>
        
        <br />

        <div className='my-3 text-center'>
            <label>
            <h6>Mot de Passe:</h6>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            </label>
        </div>
      </form>
        <div className='text-center'>
            <h6>Pas de compte ? <a href="/Inscription">Inscrivez-vous.</a></h6>
        </div>
        <div className='mt-3 text-center'>
            <button style={{ maxWidth: '100%', maxHeight: '100%' }} type="submit">Se connecter</button>
        </div>
    </div>
    </>
  );
};

export default ConnexionPage;