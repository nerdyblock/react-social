import "./rightbar.css"
import { Users } from "../../dummy-data"
import OnlineFriend from "../onlineFriend/OnlineFriend"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Punit</b> and <b>5 other friends</b> have birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map(u => <OnlineFriend key={u.id} user={u}/>)}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="rightbar-title">User Information</div>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">New Delhi</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Kolkata</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img src="/assets/persons/1.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">Vin</span>
          </div>
          <div className="rightbar-following">
            <img src="/assets/persons/3.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">Vin</span>
          </div>
          <div className="rightbar-following">
            <img src="/assets/persons/5.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">Vin</span>
          </div>
          <div className="rightbar-following">
            <img src="/assets/persons/2.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">Vin</span>
          </div>
          <div className="rightbar-following">
            <img src="/assets/persons/4.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">Vin</span>
          </div>
          <div className="rightbar-following">
            <img src="/assets/persons/8.jpeg" alt="" className="rightbar-following-img" />
            <span className="rightbar-following-username">Vin</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
