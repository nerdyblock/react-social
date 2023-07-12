import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummy-data"
import { useState } from "react"

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }

    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={Users.filter(u => u.id === post.id)[0].profilePicture} alt="" className="post-profile-img" />
                        <span className="post-user-name">{Users.filter(u => u.id === post.id)[0].username}</span>
                        <span className="post-time">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert/>
                    </div>
                </div>
                <div className="post-center">
                    <div className="post-text">{post?.desc}</div>
                    <img src={post.photo} alt="" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" className="post-like-icon"  onClick={likeHandler}/>
                        <img src="/assets/heart.png" alt="" className="post-like-icon" onClick={likeHandler}/>
                        <span className="post-like-counter">{like} People liked this post</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
