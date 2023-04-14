import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

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

    <className className="body">
      <className className="wrapper2">
        <className className="form-box login">
        <h2>Inscription</h2>
        
        
          <form onSubmit={handleSubmit}>
            
            
            <div className="input-box2">
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
          
            <div className="input-box3">
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

        
            <div className="input-box3">
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
         
          
          <div className='btn-inscription'>
            <button className='btn' type="submit">S'inscrire</button>
          </div>
          </form>
      

        <div>
          <br />
          <h6>Déjà un compte ? <a href="/Connexion">Connectez-vous.</a></h6>
        </div>
      

        </className>
      </className>
    </className>
      
        
          
    </>
  );
};

export default RegistrationPage;