export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Category: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
      };
      Expense: {
        Row: {
          amount: number;
          created_at: string;
          expense_date: string;
          id: string;
          note: string | null;
        };
        Insert: {
          amount?: number;
          created_at?: string;
          expense_date: string;
          id?: string;
          note?: string | null;
        };
        Update: {
          amount?: number;
          created_at?: string;
          expense_date?: string;
          id?: string;
          note?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
