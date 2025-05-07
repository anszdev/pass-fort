import { AuthController } from "@controllers/auth";

export const authRoutes = {
  "/": () => new Response("Hello World"),
  "/api/auth/send-otp": {
    POST: async (req: Request) => await AuthController.registerUser(req),
  },
  "/api/auth/verify-otp": {
    POST: async (req: Request) => await AuthController.verifyOtp(req),
  },
  "/api/auth/set-password": {
    POST: async (req: Request) => await AuthController.setNewPassword(req),
  },
  "/api/auth/sign-in": {
    POST: async (req: Request) => await AuthController.signIn(req),
  },
  "/api/auth/logout": {
    POST: async (req: Request) => await AuthController.signOut(req),
  },
};
