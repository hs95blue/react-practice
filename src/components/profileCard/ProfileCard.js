import React from 'react';

const ProfileCard = ({ data }) => {
    const formatNumber = (num) => {
            return (num / 1000).toFixed(1) + 'K';
        return num;
    }
    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <img src={data.profileImage} alt="profile" />
            </div>
            <div className="profile-card-body">
                <div className="profile-card-body-item">
                    <div className="profile-card-body-item-name">
                        <span className='name'>{data.name}</span>
                        <span className='age'>{data.age}</span>
                    </div>
                    <div className="profile-card-body-item-location">
                        <span>{data.location}</span>
                    </div>
                </div>
            </div>
            <div className="profile-card-footer">
               <div className="profile-card-footer-item">
                    <div className="profile-card-footer-item-followers">
                        <span className='number'>{formatNumber(data.followers)}</span>
                        <span>Followers</span>
                    </div>
                    <div className="profile-card-footer-item-likes">
                        <span className='number'>{formatNumber(data.likes)}</span>
                        <span>Likes</span>
                    </div>
                    <div className="profile-card-footer-item-photos">
                        <span className='number'>{formatNumber(data.photos)}</span>
                        <span>Photos</span>
                    </div>
               </div>
            </div>
        </div>
      
    );
};

export default ProfileCard;
