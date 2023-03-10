import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { supabase } from "../../client";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { routePaths } from "../../constants";

import { ILoginFormValues } from "../../types/FormsTypes";
import SwitchFormAnimation from "../../components/SwitchFormAnimation/SwitchFormAnimation";

const LoginPage = () => {
  const { auth } = supabase;

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  const onSubmit: SubmitHandler<ILoginFormValues> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const { data, error } = await auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SwitchFormAnimation>
      <form
        className="flex w-full max-w-xl flex-col gap-6 rounded-lg md:bg-zinc-900 md:px-6 md:py-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-3xl font-bold text-white">
          Log in.
        </h1>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "E-mail is required",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              type="text"
              placeholder="Enter your email"
              value={value}
              onChange={onChange}
              error={errors.email?.message}
              label="Email"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Password is required",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              type="password"
              placeholder="Enter your password"
              value={value}
              onChange={onChange}
              error={errors.password?.message}
              label="Password"
            />
          )}
        />
        <Button type="submit" text="Log in" isLoading={isLoading} />
        <span className=" text-center text-sm text-white">
          Don't have an account?{" "}
          <Link to={routePaths.signup} className="font-semibold">
            Sign up
          </Link>
        </span>
      </form>
    </SwitchFormAnimation>
  );
};

export default LoginPage;
