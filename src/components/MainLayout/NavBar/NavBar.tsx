import { useState } from 'react';
import { Navbar } from '@mantine/core';
import {
  IconFriends,
  IconGauge,
  IconLogout,
  IconMessages,
  IconMusic,
  IconPhoneCall,
  IconPhoto,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
  IconVideo,
} from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useNavBarStyles } from './NavBar.css';

const data = [
  { icon: IconUser, label: 'My Profile', to: '/profile/' },
  { icon: IconFriends, label: 'Friends', to: '/friends/' },
  { icon: IconPhoto, label: 'Photos', to: '/photos/' },
  { icon: IconPhoneCall, label: 'Calls', to: '/calls/' },
  { icon: IconMessages, label: 'Messages', to: '/messages/' },
  { icon: IconGauge, label: 'Feed', to: '/feed/' },
  { icon: IconMusic, label: 'Music', to: '/music/' },
  { icon: IconVideo, label: 'Videos', to: '/videos/' },
  { icon: IconSettings, label: 'Settings', to: '/settings/' },
];

export const NavigationBar = () => {
  const { classes, cx } = useNavBarStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.to}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height="100v" width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};
