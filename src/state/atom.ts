// src/recoil/atoms.ts
import { atom } from 'recoil';

// Example atom for user authentication state
export const userState = atom({
  key: 'userState',  // Must be unique across all atoms
  default: null,     // Initial state value
});
