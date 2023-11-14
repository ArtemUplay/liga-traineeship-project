import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { NotFound, TaskFormPage, TasksPage } from 'src/pages';
import { PageContainer, MainTtile } from 'src/components';
import { Paths } from 'src/constants';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <PageContainer>
        <MainTtile text={'TODO LIST'} />
        <BrowserRouter>
          <Routes>
            <Route path={Paths.TASK_LIST} element={<TasksPage />} />
            <Route path={Paths.FORM_EDIT_ADD_TASK} element={<TaskFormPage />} />
            <Route path={Paths.FORM_EDIT_EDIT_TASK} element={<TaskFormPage />} />
            <Route path={Paths.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </>
  );
};
