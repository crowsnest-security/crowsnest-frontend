import {
  FilledTextFieldProps,
  StandardTextFieldProps,
  TextField,
} from '@mui/material';
import { ChangeEvent } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

export interface ControlledTextFieldProps<T extends FieldValues = FieldValues>
  extends Omit<
      StandardTextFieldProps | FilledTextFieldProps,
      'name' | 'defaultValue'
    >,
    UseControllerProps<T> {
  parseValue?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => string;
}

export const ControlledTextField = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  helperText,
  disabled,
  parseValue,
  onBlur,
  ...inputProps
}: ControlledTextFieldProps<T>) => {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  return (
    <TextField
      error={Boolean(fieldState?.error)}
      helperText={
        fieldState?.error?.message ? fieldState?.error?.message : helperText
      }
      {...inputProps}
      {...field}
      onChange={(e) => {
        field.onChange(parseValue ? parseValue?.(e) : e);
        inputProps?.onChange?.(e);
      }}
      onBlur={(e) => {
        field.onBlur();
        onBlur && onBlur(e);
      }}
      disabled={disabled}
    />
  );
};
