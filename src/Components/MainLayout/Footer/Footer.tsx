import { ActionIcon, Container, Group } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons';
import { useFooterStyles } from './Footer.css';

export const FooterSocial = () => {
  const { classes } = useFooterStyles();

  return (
    <Container className={classes.inner}>
      logo
      <Group spacing={0} className={classes.links} position="right" noWrap>
        <ActionIcon size="lg">
          <IconBrandTwitter size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <IconBrandYoutube size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <IconBrandInstagram size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  );
};
