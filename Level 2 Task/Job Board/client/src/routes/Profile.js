import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.token) {
      navigate('/login');
      return;
    }

    setSuccess("User logged in");
    }, [navigate]);

  return (
    <div>
      Profile
      {success}
    </div>
  );
}

export default Profile;
