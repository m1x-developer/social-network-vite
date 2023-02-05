import { AppShell, Text, useMantineTheme } from '@mantine/core';
import { NavigationBar } from './NavBar/NavBar';
import { HeaderMegaMenu } from './Header/Header';
import { FooterSocial } from './Footer/Footer';

export const MainLayout = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavigationBar />}
      footer={<FooterSocial />}
      header={<HeaderMegaMenu />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
};
