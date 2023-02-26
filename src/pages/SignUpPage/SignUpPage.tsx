import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { supabase } from "../../client";
import Input from "../../components/Input/Input";

import { ISignUpFormValues } from "../../types/FormsTypes";

const SignUpPage = () => {
  const { auth } = supabase;
  const { control, handleSubmit } = useForm<ISignUpFormValues>();

  const onSubmit: SubmitHandler<ISignUpFormValues> = async ({
    fullName,
    email,
    password,
    confirmPassword,
  }) => {
    try {
      if (password !== confirmPassword) return;
      const { data, error } = await auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
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
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <Input
              type="text"
              placeholder="Full name"
              value={value}
              onChange={onChange}
            />
          )}
        />
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
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <Input
              type="confirmPassword"
              placeholder="Confirm password"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
