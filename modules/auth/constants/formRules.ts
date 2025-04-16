import { type RegisterOptions } from 'react-hook-form';

export const EMAIL_RULES: RegisterOptions = {
  required: '📭 Por favor, ingresa tu correo electrónico',
  pattern: {
    value:
      /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/,
    message:
      '❌ El formato del correo no es válido. Verifica que tenga @ y un dominio correcto',
  },
};

export const PASSWORD_RULES: RegisterOptions = {
  required: '🔒 La contraseña es obligatoria',
  minLength: {
    value: 10,
    message: '📏 La contraseña debe tener al menos 10 caracteres',
  },
  validate: (value: string) => {
    const rules = [
      {
        label: '📏 Al menos 10 caracteres',
        valid: value.length >= 10,
      },
      {
        label: '🔡 Una letra minúscula',
        valid: /[a-z]/.test(value),
      },
      {
        label: '🔠 Una letra mayúscula',
        valid: /[A-Z]/.test(value),
      },
      {
        label: '🔢 Un número',
        valid: /\d/.test(value),
      },
      {
        label: '💥 Un símbolo especial (!@#$%^&*_+-:;,.?~)',
        valid: /[!@#$%^&*_+\-:;,.?~]/.test(value),
      },
      {
        label: '🚫 Sin espacios',
        valid: !/\s/.test(value),
      },
    ];

    const failed = rules.filter((r) => !r.valid);

    if (failed.length === 0) return true;

    return `⚠️ Tu contraseña necesita lo siguiente:\n${failed
      .map((r) => `- ${r.label}`)
      .join('\n')}`;
  },
};

export const CONFIRM_PASSWORD_RULES: RegisterOptions = {
  required: '🔁 Confirma tu contraseña',
  validate: (value, { password }) => {
    if (value !== password) {
      return '❌ Las contraseñas no coinciden';
    }
  },
};
