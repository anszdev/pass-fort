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
  validate: (value: string) => {
    const rules = [
      {
        label: 'Tener al menos 10 caracteres',
        valid: value.length >= 10,
      },
      {
        label: 'Incluir al menos una letra minúscula',
        valid: /[a-z]/.test(value),
      },
      {
        label: 'Incluir al menos una letra mayúscula',
        valid: /[A-Z]/.test(value),
      },
      {
        label: 'Incluir al menos un número',
        valid: /\d/.test(value),
      },
      {
        label: 'Incluir al menos un símbolo (!@#$%^&*_+-:;,.?~)',
        valid: /[!@#$%^&*_+\-:;,.?~]/.test(value),
      },
      {
        label: 'No debe contener espacios',
        valid: !/\s/.test(value),
      },
    ];

    const failed = rules.filter((r) => !r.valid);

    if (failed.length === 0) return true;

    return `La contraseña debe cumplir lo siguiente:\n- ${failed
      .map((r) => r.label)
      .join('\n- ')}`;
  },
};

export const CONFIRM_PASSWORD_RULES: RegisterOptions = {
  required: 'Este campo es requerido',
  validate: (value, { password }) => {
    if (value !== password) {
      return 'Las contraseñas no coinciden';
    }
  },
};
