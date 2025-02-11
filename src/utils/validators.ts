import { i18n } from '@/i18n';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isURL from 'validator/lib/isURL';

const REQUIRED_MSG = i18n.t('validation.required');
const INVALID_URL_MSG = i18n.t('validation.invalidUrl');
const EMAIL_MSG = i18n.t('validation.invalidEmail');

type ValidatorValue = string | undefined;
type ValidatorValues = Record<string, string>;

export const composeValidators =
  (
    ...validators: Array<
      (value: ValidatorValue, allValues: ValidatorValues) => string | undefined
    >
  ) =>
  (value: ValidatorValue, allValues: ValidatorValues) =>
    validators.reduce(
      (
        error: string | undefined,
        validator: (
          value: ValidatorValue,
          allValues: ValidatorValues,
        ) => string | undefined,
      ) => error || validator(value, allValues),
      undefined,
    );

export const emptyValidation = () => undefined;

export const requiredValidation = (value: string | number | null = '') => {
  // check null value

  if (!value) {
    return REQUIRED_MSG;
  }

  return isEmpty(value.toString(), { ignore_whitespace: true })
    ? REQUIRED_MSG
    : undefined;
};

export const linkValidation = (value: string = '') => {
  return isURL(value, { require_protocol: true }) ? undefined : INVALID_URL_MSG;
};

export const emailValidation = (value = '') =>
  isEmpty(value, { ignore_whitespace: true })
    ? REQUIRED_MSG
    : isEmail(value)
      ? undefined
      : EMAIL_MSG;
