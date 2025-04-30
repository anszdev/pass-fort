import { validateRegisterUser, validateVerifyOtp } from "@/schemas/auth";
import { AuthModel } from "@models/auth";

export class AuthController {
  static async registerUser(req: Request) {
    const body = (await req.json()) as { email: string };
    const result = await validateRegisterUser(body);

    if (!result.success) {
      return Response.json(
        { error: result.issues[0].message },
        { status: 400 }
      );
    }

    await AuthModel.register(result.output);

    return Response.json(
      {
        message: `Codigo de verificacion enviado exitosamente a ${result.output.email}`,
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  static async verifyOtp(req: Request) {
    const body = (await req.json()) as { email: string; token: string };
    const result = await validateVerifyOtp(body);

    if (!result.success) {
      return Response.json(
        { error: result.issues[0].message },
        { status: 400 }
      );
    }

    await AuthModel.verifyOtp(result.output);

    return Response.json(
      {
        message: `Cuenta verificada exitosamente para ${result.output.email}`,
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}
