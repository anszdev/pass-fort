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

export const validateRegisterUser = (data: { email: string }) =>
  v.safeParseAsync(registerUserSchema, data);

export const validateVerifyOtp = (data: { email: string; token: string }) =>
  v.safeParseAsync(verifyOtpSchema, data);
