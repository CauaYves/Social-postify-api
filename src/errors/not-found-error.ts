import { aplicationError } from "interfaces";

export function notFoundError(message: string): aplicationError {
  return {
    name: "notFoundError",
    message,
  };
}
