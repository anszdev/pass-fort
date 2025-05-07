import * as v from "valibot";

const registerUserSchema = v.object({
  email: v.pipe(
    v.string("El correo debe ser texto"),
    v.nonEmpty("El correo no puede estar vacío"),
    v.email(
      "El formato del correo no es válido. Verifica que tenga @ y un dominio correcto"
    )
  ),
});

const verifyOtpSchema = v.object({
  email: v.pipe(
    v.string("El correo debe ser texto"),
    v.nonEmpty("El correo no puede estar vacío"),
    v.email(
      "El formato del correo no es válido. Verifica que tenga @ y un dominio correcto"
    )
  ),
  token: v.pipe(
    v.string("El token debe ser texto"),
    v.nonEmpty("El token no puede estar vacío")
  ),
});

const verifyPasswordSchema = v.object({
  password: v.pipe(
    v.string("🔒 La contraseña es obligatoria"),
    v.nonEmpty("🔒 La contraseña es obligatoria"),
    v.minLength(12, "📏 Al menos 12 caracteres"),
    v.maxLength(36, "📏 Debe tener menos de 36 caracteres")
  ),
});

const loginSchema = v.object({
  email: v.pipe(
    v.string("El correo debe ser texto"),
    v.nonEmpty("El correo no puede estar vacío"),
    v.email(
      "El formato del correo no es válido. Verifica que tenga @ y un dominio correcto"
    )
  ),
  password: v.pipe(
    v.string("🔒 La contraseña es obligatoria"),
    v.nonEmpty("🔒 La contraseña es obligatoria"),
    v.minLength(12, "📏 Al menos 12 caracteres"),
    v.maxLength(36, "📏 Debe tener menos de 36 caracteres")
  ),
});

export const validateRegisterUser = (data: { email: string }) =>
  v.safeParseAsync(registerUserSchema, data);

export const validateVerifyOtp = (data: { email: string; token: string }) =>
  v.safeParseAsync(verifyOtpSchema, data);

export const validateVerifyPassword = (data: { password: string }) =>
  v.safeParseAsync(verifyPasswordSchema, data);

export const validateLogin = (data: { email: string; password: string }) =>
  v.safeParseAsync(loginSchema, data);
