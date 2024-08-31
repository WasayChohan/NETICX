import React from "react";
import "./Password.css";
import { useForm } from "react-hook-form";

function Password() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          {...register("password", {
            required: "password is required",
            pattern: {
              value:
                /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
              message: "one uppercase one number one special charater",
            },
            minLength: {
              value: 8,
              message: "min length 8",
            },
            maxLength: {
              value: 8,
              message: "max length 8",
            },
          })}
          onKeyUp={() => {
            trigger("password");
          }}
        />

        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Password;
