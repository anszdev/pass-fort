import { supabase } from "@lib/supabase";

export class AuthModel {
  static async register({ email }: { email: string }) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      },
    });

    if (error) {
      console.log(error);
      throw new Error(error.message);
    }

    return data;
  }

  static async verifyOtp({ email, token }: { email: string; token: string }) {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        type: "email",
        token,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data.session;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
