import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Punit</b> and <b>5 other friends</b> have birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-friend-profile">
              <img src="/assets/persons/3.jpeg" alt="" className="rightbar-friend-profile-img" />
              <span className="online-circle"></span>
            </div>
            <span className="rightbar-friend-username">Moody Blame</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
