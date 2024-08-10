import React from 'react';
import ProfileCard from '../components/profileCard/ProfileCard';

const ProfilePage = () => {

    const data = {
        name: "John Doe",
        age: 30,
        location: "New York",
        followers: 1000,
        likes: 500,
        photos: 100,
        profileImage: "https://via.placeholder.com/150",
    }

    return (
        <div className="profile">
            <section className='profile-section'>
                <h1>Profile Card</h1>
            <ProfileCard data={data} />
            </section>
        </div>
    );
};

export default ProfilePage;
