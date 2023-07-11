import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">SocialDev</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-bar-icon"/>
          <input type="text" className="search-bar-input" placeholder="search for friends, post or video"/>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <img src="/assets/persons/1.jpeg" alt="" className="topbar-image" />
        </div>
      </div>
    </div>
  )
}
