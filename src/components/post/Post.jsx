import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post-container">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img src="/assets/persons/1.jpeg" alt="" className="post-profile-img" />
                    <span className="post-user-name">Vin</span>
                    <span className="post-time">5 mins ago</span>
                </div>
                <div className="post-top-right">
                    <MoreVert/>
                </div>
            </div>
            <div className="post-center">
                <div className="post-text">Hey! It's my first post :)</div>
                <img src="/assets/post/1.jpeg" alt="" className="post-img" />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img src="/assets/like.png" alt="" className="post-like-icon" />
                    <img src="/assets/heart.png" alt="" className="post-like-icon" />
                    <span className="post-like-counter">35 People liked this post</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text">20 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
