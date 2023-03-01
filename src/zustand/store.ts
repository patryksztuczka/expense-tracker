import { create } from "zustand";

import { createExpenseSlice, IExpenseSlice } from "./slices/expenseSlice";

export const useBoundStore = create<IExpenseSlice>()((...a) => ({
  ...createExpenseSlice(...a),
}));
