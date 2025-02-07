import { css } from '@emotion/react';
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  SelectVariants,
  TextField,
} from '@mui/material';
import { ReactNode } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

const useStyles = () => {
  return {
    loader: css`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
    `,
    placeholderItem: css`
      min-height: 25px;
    `,
  };
};

export type SelectItemType = {
  value: string | number;
  label: ReactNode;
};
export interface ControlledSelectProps<T extends FieldValues = FieldValues>
  extends Omit<SelectProps, 'defaultValue' | 'name' | 'variant'>,
    UseControllerProps<T> {
  options: SelectItemType[];
  isLoading?: boolean;
  variant?: SelectVariants;
  placeholder?: string;
}

export const ControlledSelect = <T extends FieldValues>({
  className = '',
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  options,
  size,
  isLoading,
  ...inputProps
}: ControlledSelectProps<T>) => {
  const styles = useStyles();
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  return (
    <FormControl size={size} className={className}>
      {isLoading ? (
        <>
          <div css={styles.loader}>
            <CircularProgress size={16} />
          </div>

          <TextField disabled size={size} className={className} />
        </>
      ) : (
        <>
          {inputProps?.label ? (
            <InputLabel error={Boolean(fieldState?.error)}>
              {inputProps.label}
            </InputLabel>
          ) : null}

          <Select
            readOnly={isLoading}
            size={size}
            {...field}
            {...inputProps}
            error={Boolean(fieldState?.error)}
          >
            {inputProps?.placeholder ? (
              <MenuItem value="" css={styles.placeholderItem}>
                {inputProps?.placeholder}
              </MenuItem>
            ) : null}

            {options.map(({ value, label }: SelectItemType, index) => (
              <MenuItem key={index} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>

          {fieldState?.error ? (
            <FormHelperText error>{fieldState.error?.message}</FormHelperText>
          ) : null}
        </>
      )}
    </FormControl>
  );
};
