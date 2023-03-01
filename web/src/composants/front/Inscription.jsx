import React, { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);//Lien de l'api a modifier 
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <div className='my-3 text-center'>
          <h1>Inscription</h1>
        </div>
        <br />
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <form onSubmit={handleSubmit}>
          <div>
            
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
          <br />
          <div className='mt-3 text-center'>
            <button style={{ maxWidth: '100%', maxHeight: '100%' }} type="submit">S'inscrire</button>
          </div>
        </form>
      </div>

        <div>
          <br />
          <h6>Déjà un compte ? <a href="/Connexion">Connectez-vous.</a></h6>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;