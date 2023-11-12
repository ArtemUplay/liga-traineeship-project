import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  searchValue: Yup.string().required('The input field cannot be empty'),
  filter: Yup.string().required('Выберите фильтр поиска'),
});
