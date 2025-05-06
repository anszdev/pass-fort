import { AuthController } from "@controllers/auth";
import { supabase } from "@lib/supabase";

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
  "/api/auth/login": {
    GET: async (req: Request) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "baezdev@gmail.com",
        password: "AngelBaezSl18$",
      });

      console.log(data, error);

      return new Response("Login");
    },
  },
  "/api/auth/logout": new Response("Logout"),
};
