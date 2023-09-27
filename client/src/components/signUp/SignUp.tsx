import React, { useState } from 'react'
import './SignUp.css'

interface FormState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}

interface ErrorState {
  firstName: string[];
  lastName: string[];
  username: string[];
  email: string[];
  phone: string[];
  password: string[];
}

const SignUp: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  })
  const [errors, setErrors] = useState<ErrorState>({
    firstName: [],
    lastName: [],
    username: [],
    email: [],
    phone: [],
    password: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formState);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formState);
    }
  };

  const validate = (formState: FormState) => {
    const newErrors: ErrorState = {
      firstName: [],
      lastName: [],
      username: [],
      email: [],
      phone: [],
      password: [],
    };
    if (formState.username.trim() === '') newErrors.username.push('Username is required');
    if (formState.email.trim() === '') newErrors.email.push('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email.push('Email is not valid');
    if (formState.password.trim() === '') newErrors.password.push('Password is required');
    return newErrors;
  };

  return (
    <div className='SignUp'>
      <div className='SignUp__header'>
        <h1>Create your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
          {errors.firstName.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
          {errors.lastName.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
          {errors.username.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          {errors.email.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
          {errors.phone.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
          {errors.password.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );

}

export default SignUp