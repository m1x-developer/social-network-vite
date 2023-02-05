import { Messages } from '../Features/Messages/Messages';
import { Feed } from '../Features/Feed/Feed';
import { Music } from '../Features/Music/Music';
import { Videos } from '../Features/Videos/Videos';
import { Settings } from '../Features/Settings/Settings';
import { Profile } from '../Features/Profile/Profile';

export const protectedRoutes = [
  {
    path: '/profile/',
    element: <Profile />,
    children: [],
  },
  {
    path: '/messages/',
    element: <Messages />,
    children: [{ path: '/messages/', element: <Messages /> }],
  },
  {
    path: '/feed/',
    element: <Feed />,
    children: [],
  },
  {
    path: '/music/',
    element: <Music />,
    children: [],
  },
  {
    path: '/videos/',
    element: <Videos />,
    children: [],
  },
  {
    path: '/settings/',
    element: <Settings />,
    children: [],
  },
];
