import React, { useState } from 'react';
import axios from 'axios';
import './StyleTempo.css';

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


    <div className='body2'>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <h2>Incription</h2>


          <div className="inputBox">
            <input type="text"
              required="required" 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <span>Nom complet</span>
            <i></i>
          </div>


          <div className="inputBox">
            <input type="text"
                required="required" 
                name="email"
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
              onChange={handleInputChange}
            />
            <span>Mot de Passe</span>
            <i></i>
          </div>

          <input type="submit" value="sign in" />

          <div className='links'>
          <h6 >Déjà un compte ? <a href="/Connexion">Connectez-vous.</a></h6>
        </div>
        </form>

        

      </div>
    </div>
  
          
    </>
  );
};

export default RegistrationPage;