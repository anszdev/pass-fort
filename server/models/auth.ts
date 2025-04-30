import { supabase } from "@lib/supabase";

export class AuthModel {
  static async register({ email }: { email: string }) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  static async verifyOtp({ email, token }: { email: string; token: string }) {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      type: "email",
      token,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.session;
  }
}
