import { Avatar, Group, Text } from '@mantine/core';
import { IconAt, IconPhoneCall } from '@tabler/icons';
import { useProfileCard } from './ProfileCard.css';
import { ProfileCardProps } from './types';

export const ProfileCard = ({
  avatar,
  name,
  title,
  phone,
  email,
}: ProfileCardProps) => {
  const { classes } = useProfileCard();
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text
            size="xs"
            sx={{ textTransform: 'uppercase' }}
            weight={700}
            color="dimmed"
          >
            {title}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
};
