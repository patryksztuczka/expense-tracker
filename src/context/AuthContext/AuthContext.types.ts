import { ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  session: Session | undefined | null;
}
