import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(20).required('The input field cannot be empty'),
  info: Yup.string().required().min(2).max(40).required('The input field cannot be empty'),
  isImportant: Yup.bool(),
  isCompleted: Yup.bool(),
});
