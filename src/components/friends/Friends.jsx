import "./friends.css"

export default function Friends({user}) {
  return (
    <li className="sidebar-friend">
        <img className="sidebar-friend-img" src={user.profilePicture} alt="" />
        <span className="sidebar-friend-name">{user.username}</span>
    </li>
  )
}
