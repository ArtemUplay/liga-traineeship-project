import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound, TaskFormPage, TasksPage } from '../pages';
import { PageContainer } from '../components';
import { Paths } from '../constants/constants';

export const App = () => {
  return (
    <PageContainer>
      <h1 className="title">TODO list</h1>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.TASK_LIST} element={<TasksPage />} />
          <Route path={Paths.FORM_EDIT_ADD_TASK} element={<TaskFormPage />} />
          <Route path={Paths.FORM_EDIT_EDIT_TASK} element={<TaskFormPage />} />
          <Route path={Paths.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
};
