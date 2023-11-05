import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Paths } from './constants/constants';
import { NotFound, TaskEditPage, TasksPage } from './pages';
import { PageContainer } from './components';

export const App = () => {
  return (
    <PageContainer>
      <h1 className="title">TODO list</h1>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.TASK_LIST} element={<TasksPage />} />
          <Route path={Paths.FORM_EDIT_ADD_TASK} element={<TaskEditPage />} />
          <Route path={Paths.FORM_EDIT_EDIT_TASK} element={<TaskEditPage />} />
          <Route path={Paths.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
};
