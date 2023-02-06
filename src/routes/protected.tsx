import { Messages } from '../pages/Messages/Messages';
import { Feed } from '../pages/Feed/Feed';
import { Music } from '../pages/Music/Music';
import { Videos } from '../pages/Videos/Videos';
import { Settings } from '../pages/Settings/Settings';
import { Profile } from '../pages/Profile/Profile';
import { Calls } from '../pages/Calls/Calls';
import { Photos } from '../pages/Photos/Photos';
import { Friends } from '../pages/Friends/Friends';

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
    path: '/friends/',
    element: <Friends />,
    children: [],
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
    path: '/calls/',
    element: <Calls />,
    children: [],
  },
  {
    path: '/photos/',
    element: <Photos />,
    children: [],
  },
  {
    path: '/settings/',
    element: <Settings />,
    children: [],
  },
];
