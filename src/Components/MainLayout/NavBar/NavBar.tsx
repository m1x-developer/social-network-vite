import { useState } from 'react';
import { Navbar, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import {
  IconGauge,
  IconLogout,
  IconMessages,
  IconMusic,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
  IconVideo,
  TablerIcon,
} from '@tabler/icons';
import { useNavBarStyles } from './NavBar.css';

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;

  onClick?(): void;
}

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const mockdata = [
  { icon: IconUser, label: 'My Profile' },
  { icon: IconMessages, label: 'Messages' },
  { icon: IconGauge, label: 'Feed' },
  { icon: IconMusic, label: 'Music' },
  { icon: IconVideo, label: 'Videos' },
  { icon: IconSettings, label: 'Settings' },
];

export const NavigationBar = () => {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Navbar.Section grow>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
