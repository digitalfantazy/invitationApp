import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import PlaceDetails from './components/PlaceDetails/PlaceDetails.tsx';

export const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/places/:placeId',
    element: <PlaceDetails />,
  },
];

export const router = createBrowserRouter(routes);
