import { validateRegisterUser, validateVerifyOtp } from "@/schemas/auth";
import { jsonResponse } from "@/utils/responses";
import { AuthModel } from "@models/auth";

export class AuthController {
  static async registerUser(req: Request) {
    const body = (await req.json()) as { email: string };
    const result = await validateRegisterUser(body);

    if (!result.success) {
      return jsonResponse({ error: result.issues[0].message }, 400);
    }

    const registerResult = await AuthModel.register(result.output);

    if (!registerResult) {
      return jsonResponse(
        { error: "Error al enviar el codigo de verificacion" },
        500
      );
    }

    return jsonResponse(
      {
        message: `Codigo de verificacion enviado exitosamente a ${result.output.email}`,
      },
      200
    );
  }

  static async verifyOtp(req: Request) {
    const body = (await req.json()) as { email: string; token: string };
    const result = await validateVerifyOtp(body);

    if (!result.success) {
      return jsonResponse({ error: result.issues[0].message }, 400);
    }

    const verifyOtpResult = await AuthModel.verifyOtp(result.output);

    if (!verifyOtpResult) {
      return jsonResponse(
        { error: "Error al verificar el codigo de verificacion" },
        500
      );
    }

    return jsonResponse(
      {
        message: `Cuenta verificada exitosamente para ${result.output.email}`,
      },
      200
    );
  }
}
