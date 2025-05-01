import { AuthController } from "@/controllers/auth";

export const authRoutes = {
  "/": () => new Response("Hello World"),
  "/api/auth/send-otp": {
    POST: async (req: Request) => await AuthController.registerUser(req),
  },
  "/api/auth/verify-otp": {
    POST: async (req: Request) => await AuthController.verifyOtp(req),
  },
  "/api/auth/login": new Response("Login"),
  "/api/auth/logout": new Response("Logout"),
};
