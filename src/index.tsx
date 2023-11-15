import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'src/app/App';
import { store } from 'src/store/store';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
