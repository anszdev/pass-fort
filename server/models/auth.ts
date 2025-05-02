import { supabase } from "@lib/supabase";
import { jsonErrorResponse } from "@utils/responses";

export class AuthModel {
  static async register({ email }: { email: string }) {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        },
      });

      return {
        data,
        error,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async verifyOtp({ email, token }: { email: string; token: string }) {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        type: "email",
        token,
      });

      return {
        data,
        error,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async setPassword({
    password,
    email,
  }: {
    password: string;
    email: string;
  }) {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password,
        email,
      });

      return {
        data,
        error,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async resetPassword({ email }: { email: string }) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
