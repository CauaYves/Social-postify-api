import { aplicationError } from "interfaces";

export function forbiddenError(message: string): aplicationError{
    return{
        name: 'forbiddenError',
        message
    }
}