import {
  ActionIcon,
  Box,
  Button,
  Group,
  Header,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { useHeaderStyles } from './header.css';
import { useAuth } from '../../../providers/AuthContext';

export const HeaderMegaMenu = () => {
  const { classes } = useHeaderStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { user, logOut } = useAuth();

  const ChangeThemeComponent = () => (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          logo
          <Group className={classes.hiddenMobile}>
            <ChangeThemeComponent />
            <span>{user?.email}</span>
            <Button variant="default" onClick={() => logOut()}>
              Log out
            </Button>
          </Group>
        </Group>
      </Header>
    </Box>
  );
};
