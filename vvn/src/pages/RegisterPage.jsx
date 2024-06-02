import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.scss';

const Registerpage = () => {
  const [formdata, setFormdata] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    password: '',
    confirm_password: '',
    profile_image: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    setPasswordMatch(formdata.password === formdata.confirm_password || formdata.confirm_password === '');
  }, [formdata.password, formdata.confirm_password]);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (var key in formdata) {
        formData.append(key, formdata[key]);
      }
      const response = await fetch('http://localhost:3082/auth/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        Navigate('/login');
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (err) {
      console.error('Error during registration:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormdata({
      ...formdata,
      [name]: name === 'profile_image' ? files[0] : value,
    });
  };

  return (
    <div className='register'>
      <div className='register_content'>
        <form className='register_content_form' onSubmit={handleSubmit}>
          <input
            placeholder='First name'
            name='Firstname'
            value={formdata.Firstname}
            onChange={handleChange}
            required
          />
          <input
            placeholder='Last name'
            name='Lastname'
            value={formdata.Lastname}
            onChange={handleChange}
            required
          />
          <input
            placeholder='email'
            name='email'
            value={formdata.email}
            type='email'
            onChange={handleChange}
            required
          />
          <input
            placeholder='password'
            name='password'
            type='password'
            value={formdata.password}
            onChange={handleChange}
            required
          />

          <input
            placeholder='confirm_password'
            name='confirm_password'
            type='password'
            value={formdata.confirm_password}
            onChange={handleChange}
            required
          />
          {!passwordMatch && <p style={{ color: 'red' }}>Password do not match</p>}
          <input
            id='image'
            type='file'
            name='profile_image'
            accept='Images/*'
            style={{ display: 'none' }}
            onChange={handleChange}
            required
          />
          <label htmlFor='image'>
            <img src='./ninth.png' alt='fhbjdf' />
            <p>Upload your photo</p>
          </label>
          {formdata.profile_image && (
            <img src={URL.createObjectURL(formdata.profile_image)} alt='profile' style={{ maxWidth: '80px' }} />
          )}
          <button type='submit' disabled={!passwordMatch}>
            REGISTER
          </button>
        </form>
        <a href='/login'>Already have an account? Login here</a>
      </div>
    </div>
  );
};

export default Registerpage;
