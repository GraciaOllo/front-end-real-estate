import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await ApiService.getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{profile.name}'s Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Joined on: {profile.joinedDate}</p>
    </div>
  );
};

export default Profile;
