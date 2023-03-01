import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
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
        <div className='my-3'>
            <h1>Inscription</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='my-3 justify-content-left'>
            <label>
                <h6>Nom Complet:</h6>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            </label>
        </div>

        <br />

        <div className='my-3'>
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

        <div className='my-3'>
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
        <div>
            <h6>Déjà un compte ? <a href="/Connexion">Connectez-vous.</a></h6>
        </div>
        <div className='mt-3 text-center'>
            <button style={{ maxWidth: '100%', maxHeight: '100%' }} type="submit">S'inscrire</button>
        </div>
    </div>
    </>
  );
};

export default RegistrationPage;