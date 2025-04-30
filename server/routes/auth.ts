import { AuthController } from "@/controllers/auth";

export const authRoutes = {
  "/": () => new Response("Hello World"),
  "/api/auth/register": {
    POST: async (req: Request) => await AuthController.registerUser(req),
  },
  "/api/auth/verifyOtpCode": {
    POST: async (req: Request) => await AuthController.verifyOtp(req),
  },
  "/api/auth/login": new Response("Login"),
  "/api/auth/logout": new Response("Logout"),
};
