import { create } from 'zustand';

type FormStore = {
  mode: 'register' | 'reset-password';
  email: string;
  password: string;
  otpCode: string;
  setMode: (mode: 'register' | 'reset-password') => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setOtpCode: (otpCode: string) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  mode: 'register',
  email: '',
  password: '',
  otpCode: '',
  setMode: (mode) => set({ mode }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setOtpCode: (otpCode) => set({ otpCode }),
}));
