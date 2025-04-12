import { type RegisterOptions } from 'react-hook-form';

export const EMAIL_RULES: RegisterOptions = {
  required: 'Este campo es requerido',
  pattern: {
    value:
      /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/,
    message: 'El correo no es válido',
  },
};

export const PASSWORD_RULES: RegisterOptions = {
  required: 'Este campo es requerido',
  minLength: {
    value: 10,
    message: 'La contraseña es muy corta',
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{10,}$/,
    message: `La contraseña debe cumplir lo siguiente:
- Tener al menos 10 caracteres
- Incluir al menos una letra minúscula
- Incluir al menos una letra mayúscula
- Incluir al menos un número
- Incluir al menos un símbolo (!@#$%^&*_+-:;,.?~)`,
  },
};
