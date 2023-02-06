import { Avatar, Paper, Text } from '@mantine/core';
import { useProfiStyles } from './Profile.css';

interface UserCardImageProps {
  avatar: string;
  name: string;
}

export const ProfileCard = ({ avatar, name }: UserCardImageProps) => {
  const { classes, theme } = useProfiStyles();

  return (
    <Paper radius="md" withBorder p="lg">
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm" />
    </Paper>
  );
};
