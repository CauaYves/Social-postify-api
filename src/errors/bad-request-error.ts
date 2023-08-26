import { aplicationError } from "interfaces";

export function badRequestError(message: string): aplicationError {
  return {
    name: "conflictError",
    message,
  };
}
