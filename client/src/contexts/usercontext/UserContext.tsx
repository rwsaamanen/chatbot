
import { createContext } from 'react';

interface UserContextProps {
  user: any | null;
  loading: boolean;
}

const UserContext = createContext<UserContextProps>({ user: null, loading: true });

export default UserContext;
