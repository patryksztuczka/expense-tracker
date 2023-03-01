import { useEffect } from "react";
import { supabase } from "../../client";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useBoundStore } from "../../zustand/store";

const HomePage = () => {
  const auth = useAuth();
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  const getExpenses = useBoundStore((state) => state.getExpenses);
  const isLoading = useBoundStore((state) => state.isLoading);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="text-white">
      HomePage
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
