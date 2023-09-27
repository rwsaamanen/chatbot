import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Help.css';

const Help: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const handleMessageSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle message submission here
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className='Help'>
      <div className='Help__header'>
        <h1>{step === 1 ? 'Need help?' : 'How can we help?'}</h1>
      </div>
      {step === 1 ? (
        <form className='Help__form' onSubmit={handleEmailSubmit}>
          <label htmlFor='email' className='Help__label'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='Help__input'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type='submit' className='Help__button'>
            Continue
          </button>
        </form>
      ) : (
        <form className='Help__form' onSubmit={handleMessageSubmit}>
          <label htmlFor='message' className='Help__label'>
            Message
          </label>
          <textarea id='message' className='Help__textarea' rows={4} required></textarea>
          <button type='submit' className='Help__button'>
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Help;
