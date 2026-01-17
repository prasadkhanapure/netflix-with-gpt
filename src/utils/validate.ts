import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from "./constants";
import type { FormValidationError } from "../types";

export const isValidSignInFormData = ({
  email,
  password,
  name,
}: FormValidationError): string | null => {
  if (!EMAIL_REGEX.test(email)) {
    return "Email address is not valid";
  }

  if (!PASSWORD_REGEX.test(password)) {
    return "Password is not valid";
  }

  if (name && !NAME_REGEX.test(name)) {
    return "Name is not valid";
  }

  return null;
};
