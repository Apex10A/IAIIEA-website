import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  f_name: '',
  m_name: '',
  l_name: '',
  type: '',
  profession: '',
  phone: '',
  email: '',
  postal_addr: '',
  country: '',
  qualifications: '',
  area_of_specialization: '',
  institution_name_addr: '',

    // Add other user properties here
  }
  
  // Define the type for the Zustand store state
  interface AuthState {
    user: User | null;
    token: string | null;
    setUser: (userData: User, token: string) => void;
    logout: () => void;
  }

const useAuthStore = create(
  persist(
    (set) => ({
      user: null, 
      token: null, 
      setUser: (userData: User, token: string) => set({ user: userData, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
