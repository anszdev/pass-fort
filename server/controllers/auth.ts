import {
  validateRegisterUser,
  validateVerifyOtp,
  validateVerifyPassword,
} from "@schemas/auth";
import { jsonErrorResponse, jsonSuccessResponse } from "@utils/responses";
import { AuthModel } from "@models/auth";

export class AuthController {
  static async registerUser(req: Request) {
    const body = (await req.json()) as { email: string };
    const result = await validateRegisterUser(body);

    if (!result.success) {
      return jsonErrorResponse({
        error: {
          message: result.issues[0].message,
          code: "VALIDATION_ERROR",
        },
        status: 400,
      });
    }

    const { error, data } = await AuthModel.register(result.output);

    if (error) {
      return jsonErrorResponse({
        error: {
          message: error.message,
          code: error.code,
        },
        status: error.status,
      });
    }

    return jsonSuccessResponse({
      message: "Code sent successfully",
      status: 200,
    });
  }

  static async verifyOtp(req: Request) {
    const body = (await req.json()) as { email: string; token: string };
    const result = await validateVerifyOtp(body);

    if (!result.success) {
      return jsonErrorResponse({
        error: {
          message: result.issues.map((issue) => issue.message).join("\n"),
          code: "VALIDATION_ERROR",
        },
        status: 400,
      });
    }

    const { error, data } = await AuthModel.verifyOtp(result.output);

    if (error) {
      return jsonErrorResponse({
        error: {
          message: error.message,
          code: error.code,
        },
        status: error.status,
      });
    }

    return jsonSuccessResponse({
      message: "Account verified successfully",
      status: 200,
      data: {
        session: data.session?.access_token,
        token_type: data.session?.token_type,
        expires_in: data.session?.expires_in,
        refresh_token: data.session?.refresh_token,
      },
    });
  }

  static async setNewPassword(req: Request) {
    const body = (await req.json()) as {
      password: string;
      refreshToken: string;
    };
    const token = req.headers.get("Authorization")?.split(" ")[1];
    const result = await validateVerifyPassword(body);

    if (!result.success) {
      return jsonErrorResponse({
        error: {
          message: result.issues.map((issue) => issue.message).join("\n"),
          code: "VALIDATION_ERROR",
        },
        status: 400,
      });
    }

    if (!token) {
      return jsonErrorResponse({
        error: {
          message: "No token provided",
          code: "NO_TOKEN",
        },
        status: 401,
      });
    }

    await AuthModel.setSession({
      token,
      refreshToken: body.refreshToken,
    });

    const { error, data } = await AuthModel.setPassword(result.output);

    if (error) {
      return jsonErrorResponse({
        error: {
          message: error.message,
          code: error.code,
        },
        status: error.status,
      });
    }

    return jsonSuccessResponse({
      message: "Password set successfully",
      status: 200,
      data,
    });
  }

  /* static async resetPassword(req: Request) {
    const body = (await req.json()) as { email: string };
    const result = await validateRegisterUser(body);

    if (!result.success) {
      return jsonErrorResponse({
        error: {
          message: result.issues.map((issue) => issue.message).join("\n"),
          code: "VALIDATION_ERROR",
        },
        status: 400,
      });
    }

    const {} = await AuthModel.resetPassword(result.output);

    if (!resetPasswordResult) {
      return jsonErrorResponse({
        error: {
          message: "Error al restablecer la contraseña",
          code: "INTERNAL_SERVER_ERROR",
        },
        status: 500,
      });
    }

    return jsonSuccessResponse({
      message: "Contraseña restablecida exitosamente",
      status: 200,
    });
  } */
}
