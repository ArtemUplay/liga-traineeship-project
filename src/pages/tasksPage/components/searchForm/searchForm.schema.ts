import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  searchValue: Yup.string(),
  filter: Yup.string().required('Выберите фильтр поиска'),
});
