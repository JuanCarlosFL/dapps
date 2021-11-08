import {} from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  dapps: string;
  titoFredo: string;
  taxiYa: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  dapps: '/dapps',
  titoFredo: '/tito-fredo',
  taxiYa: '/taxi-ya',
}

export const routes: SwitchRoutes = {
  ...switchRoutes,
}
