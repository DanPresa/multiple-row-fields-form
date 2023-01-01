import React, { FC, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { object, string, array, InferType, boolean } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FriendsFormField from './FriendsFormField';
import { Button, Grid } from '@mui/material';

export const yupSchema = object()
  .shape({
    firstName: string().trim().required('Name is requied'),
    friends: array(
      object({
        firstName: string().trim().required('Name is required mf'),
        age: string().trim().required('Age is required'),
        country: object()
          .shape({
            code: string(),
            label: string(),
            phone: string(),
          })
          .typeError('This country field is required'),
      })
    ),
  })
  .required();

export type IFormInput = InferType<typeof yupSchema>;

const FriendsForm: FC<{}> = () => {
  const [values, setValues] = useState<IFormInput>();

  const methods = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(yupSchema),
    defaultValues: {
      firstName: '',
      friends: [
        {
          firstName: '',
          age: '',
          country: null,
        },
      ],
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IFormInput> = (values) => {
    console.log(values);

    setValues(values);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FriendsFormField />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary' type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </>
  );
};

export default FriendsForm;
