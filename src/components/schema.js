import * as yup from "yup";
import isEmailValidator from "validator/lib/isEmail";

export const schema = yup.object({
  user_email: yup
    .string()
    .email("Formato de email no valido")
    .required("Campo obligatorio")
    .test(
      "is-valid",
      () => "Formato de email no valido",
      (value) =>
        value
          ? isEmailValidator(value)
          : new yup.ValidationError("Invalid value"),
    ),
  from_name: yup
    .string()
    .required("Campo obligatorio")
    .min(5, "Minimo 5 caracteres"),
  user_name: yup
    .string()
    .required("Campo obligatorio")
    .min(10, "Minimo 5 caracteres"),
  message: yup
    .string()
    .required("Campo obligatorio")
    .min(10, "Mensaje de minimo 10 caracteres"),
});
