// src/contexts/AuthProvider.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import UserContext from '../usercontext/UserContext';

interface AuthProviderProps {
    children: ReactNode;
  }

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getUser = async () => {
        try {
          const response = await fetch('http://localhost:5000/auth/login/success', {
            method: 'GET',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          if (response.status === 200) {
            const resObject = await response.json();
            setUser(resObject.user);
          } else {
            throw new Error('Authentication has failed!');
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
  
      getUser();
    }, []);
  
    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default AuthProvider;
