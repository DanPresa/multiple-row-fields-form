import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

type MuiTextFieldProps = {
  name: string;
} & TextFieldProps;

const MuiTextField: FC<MuiTextFieldProps> = ({ name, ...otherProps }) => {
  const methods = useFormContext();

  return (
    <Controller
      {...methods}
      name={name}
      defaultValue=''
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            {...otherProps}
            variant='outlined'
            error={!!error}
            helperText={error ? (error?.message as unknown as string) : ''}
          />
        );
      }}
    />
  );
};

export default MuiTextField;
