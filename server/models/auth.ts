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

  static async setPassword({ password }: { password: string }) {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password,
      });

      return {
        data,
        error,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async setSession({
    token,
    refreshToken,
  }: {
    token: string;
    refreshToken: string;
  }) {
    try {
      const { data, error } = await supabase.auth.setSession({
        access_token: token,
        refresh_token: refreshToken,
      });

      return {
        data,
        error,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async login({ email, password }: { email: string; password: string }) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return {
        data,
        error,
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  static async logout() {
    try {
      const { error } = await supabase.auth.signOut();

      return {
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
