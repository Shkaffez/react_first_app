export const required = value => value ? undefined : "Required";

export const minLength = min => value =>  value.length > min ? undefined : `Length must be greater then ${min}`;

export const composeValidators = (...validators) => value =>
validators.reduce((error, validator) => error || validator(value), undefined);

    