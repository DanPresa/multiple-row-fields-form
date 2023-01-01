import { object, string, array, InferType } from 'yup';

export const yupSchema = object()
  .shape({
    name: string().trim().required('Name is requied'),
    friends: array().of(
      object()
        .shape({
          firstName: string().ensure().required('Name is requied'),
        })
        .required()
    ),
  })
  .required();

export type IFormInput = InferType<typeof yupSchema>;
