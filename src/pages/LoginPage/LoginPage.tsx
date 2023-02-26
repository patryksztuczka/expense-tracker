import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { supabase } from "../../client";
import Input from "../../components/Input/Input";

import { ILoginFormValues } from "../../types/FormsTypes";

const LoginPage = () => {
  const { auth } = supabase;
  const { control, handleSubmit } = useForm<ILoginFormValues>();

  const onSubmit: SubmitHandler<ILoginFormValues> = async ({
    email,
    password,
  }) => {
    try {
      const { data, error } = await auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <form
        className="flex flex-col gap-4 rounded-xl bg-zinc-900 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <Input
              type="text"
              placeholder="E-mail"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <Input
              type="password"
              placeholder="Password"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
