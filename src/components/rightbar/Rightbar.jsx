import "./rightbar.css"
import { Users } from "../../dummy-data"
import OnlineFriend from "../onlineFriend/OnlineFriend"

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
          {Users.map(u => <OnlineFriend key={u.id} user={u}/>)}
        </ul>
      </div>
    </div>
  )
}