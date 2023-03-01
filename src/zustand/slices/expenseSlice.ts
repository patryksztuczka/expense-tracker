import { StateCreator } from "zustand";
import { supabase } from "../../client";

export interface IExpenseSlice {
  expenses: [];
  isLoading: boolean;
  getExpenses: () => void;
}

export const createExpenseSlice: StateCreator<IExpenseSlice> = (set) => ({
  expenses: [],
  isLoading: false,
  getExpenses: async () => {
    try {
      set({ isLoading: true });
      const { data, error } = await supabase.from("Expense").select("*");
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
