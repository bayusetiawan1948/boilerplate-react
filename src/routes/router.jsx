import { createBrowserRouter } from 'react-router-dom';

//list page is on menu
import menu from './menu';

const listRoute = menu.map((value) => {
  return { ...value, path: value.link, element: <value.element /> };
});

const router = createBrowserRouter(listRoute);

export { router };
