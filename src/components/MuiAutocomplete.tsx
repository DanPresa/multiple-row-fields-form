import { FC } from 'react';
import { TextField, Autocomplete, TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

type MuiAutocompleteProps = {
  label: string;
  name: string;
} & TextFieldProps;

const MuiAutocomplete: FC<MuiAutocompleteProps> = ({
  label,
  name,
  ...otherProps
}) => {
  const methods = useFormContext();

  return (
    <Controller
      {...methods}
      name={name}
      render={({
        field: { ref, onChange, ...field },
        fieldState: { error },
      }) => (
        <Autocomplete
          sx={{ width: '300px' }}
          options={countries}
          onChange={(_, data) => {
            return onChange(data);
          }}
          getOptionLabel={(option) => {
            return option.label ?? option;
          }}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                {...field}
                {...otherProps}
                label={label}
                variant='outlined'
                error={!!error}
                helperText={error ? (error?.message as unknown as string) : ''}
              />
            );
          }}
        />
      )}
    />
  );
};

export default MuiAutocomplete;

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
];
