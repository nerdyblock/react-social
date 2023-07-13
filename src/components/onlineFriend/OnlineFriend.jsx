import "./onlineFriend.css"

export default function OnlineFriend({user}) {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-friend-profile">
        <img src={user.profilePicture} alt="" className="rightbar-friend-profile-img" />
        <span className="online-circle"></span>
      </div>
      <span className="rightbar-friend-username">{user.username}</span>
    </li>
  )
}
