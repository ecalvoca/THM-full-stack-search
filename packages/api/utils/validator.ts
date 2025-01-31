import  validator  from "validator";

/**
 * Sanitize a string to prevent NoSQL injection and unwanted characters
 * @param input the user-provided string
 * @returns
 */
export const sanitizeString = (input: string) => {
    return validator.trim(
        validator.blacklist(input, "\\$\\<\\>\\{\\}\\[\\]\\;")
    ).substring(0, 70);
}