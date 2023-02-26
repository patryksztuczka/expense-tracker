import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { supabase } from "../../client";
import { routePaths } from "../../constants";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { ISignUpFormValues } from "../../types/FormsTypes";

const SignUpPage = () => {
  const { auth } = supabase;

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormValues>();

  const onSubmit: SubmitHandler<ISignUpFormValues> = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    try {
      if (password !== confirmPassword) return;
      setIsLoading(true);
      const { data, error } = await auth.signUp({
        email,
        password,
        options: {
          data: {
            firstName,
            lastName,
          },
        },
      });
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex w-full max-w-xl flex-col gap-4 md:rounded-lg md:bg-zinc-900 md:px-6 md:py-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "First name is required",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              type="text"
              placeholder="First name"
              value={value}
              onChange={onChange}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Last name is required",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              type="text"
              placeholder="Last name"
              value={value}
              onChange={onChange}
              error={errors.lastName?.message}
            />
          )}
        />
      </div>
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
            placeholder="E-mail"
            value={value}
            onChange={onChange}
            error={errors.email?.message}
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
            placeholder="Password"
            value={value}
            onChange={onChange}
            error={errors.password?.message}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "You have to confirm the password",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <Input
            type="password"
            placeholder="Confirm password"
            value={value}
            onChange={onChange}
            error={errors.confirmPassword?.message}
          />
        )}
      />
      <Button type="submit" text="Sign up" isLoading={isLoading} />
      <span className=" text-center text-sm text-white">
        Already have an account?{" "}
        <Link to={routePaths.login} className="font-semibold">
          Login
        </Link>
      </span>
    </form>
  );
};

export default SignUpPage;
