import { supabase } from "../../client";
import { useAuth } from "../../context/AuthContext/AuthContext";

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
  return (
    <div>
      HomePage
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
