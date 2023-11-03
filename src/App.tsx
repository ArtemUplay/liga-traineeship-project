import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Paths } from './constants/constants';
import { NotFound, TaskEditPage, TasksPage } from './pages';
import { PageContainer } from './components';
import { tasks } from './__mocks__/mocks';

export const App = () => {
  const [tasksArray, setTasksArray] = useState(tasks);

  return (
    <PageContainer>
      <h1 className="title">TODO list</h1>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.TASK_LIST} element={<TasksPage tasks={tasksArray} />} />
          <Route path={Paths.FORM_EDIT_ADD_TASK} element={<TaskEditPage tasks={tasksArray} />} />
          <Route path={Paths.FORM_EDIT_EDIT_TASK} element={<TaskEditPage tasks={tasksArray} />} />
          <Route path={Paths.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  );
};
