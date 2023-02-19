import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { LoadingOverlay } from '@mantine/core';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { useAuth } from '../../providers/AuthContext';
import { db } from '../../firebase';
import { ProfileData } from './types';

export const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<ProfileData>();

  useEffect(() => {
    if (user) {
      const unSub = onSnapshot(doc(db, 'users', user?.uid), (doc) => {
        const data = doc.data();

        setUserData(data);
      });
      return () => {
        unSub();
      };
    }
    return () => {
      console.log('error');
    };
  }, [user]);

  return (
    <div>
      {userData ? (
        <ProfileCard
          avatar=""
          email={userData.email}
          name="name"
          phone="phone"
          title="title"
        />
      ) : (
        <LoadingOverlay visible />
      )}
    </div>
  );
};
