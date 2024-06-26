import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { SignIn } from '../SignIn';
import { SendTo } from '../SendTo';
import { Cart } from '../Cart';
import { Fabrics } from '../Fabrics';
import { NotFound } from '../NotFound';
import { Offers } from '../Offers';
import { BedRooms } from '../BedRooms';
import { LivingRooms } from '../LivingRooms';

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/bed-room', element: <BedRooms /> },
    { path: '/bed-room/bed-bases', element: <BedRooms /> },
    { path: '/bed-room/headboards', element: <BedRooms /> },
    { path: '/bed-room/trundle-beds', element: <BedRooms /> },
    { path: '/bed-room/mattresses', element: <BedRooms /> },
    { path: '/bed-room/combo-with-mattresses', element: <BedRooms /> },
    { path: '/bed-room/combo-without-mattresses', element: <BedRooms /> },
    { path: '/bed-room/storage-ottomans', element: <BedRooms /> },
    { path: '/living-rooms', element: <LivingRooms /> },
    { path: '/living-rooms/living-room-sets', element: <LivingRooms /> },
    { path: '/living-rooms/l-shaped-sofas', element: <LivingRooms /> },
    { path: '/living-rooms/sofas', element: <LivingRooms /> },
    { path: '/living-rooms/sofas-bed', element: <LivingRooms /> },
    { path: '/living-rooms/combo-sofas', element: <LivingRooms /> },
    { path: '/living-rooms/chairs-armchairs', element: <LivingRooms /> },
    { path: '/living-rooms/coffe-tables', element: <LivingRooms /> },
    { path: '/offers', element: <Offers /> },
    { path: '/send-to', element: <SendTo /> },
    { path: '/cart', element: <Cart /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/fabrics', element: <Fabrics /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};
