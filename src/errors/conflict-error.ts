import { aplicationError } from "interfaces";

export function conflictError(message: string): aplicationError {
  return {
    name: "conflictError",
    message,
  };
}
