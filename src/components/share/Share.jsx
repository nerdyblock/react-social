import "./share.css"
import { Label, PermMedia, Room, SentimentSatisfiedAlt, ShareRounded } from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share-container">
        <div className="share-wrapper">
            <div className="share-top">
                <img src="/assets/persons/1.jpeg" alt="" className="share-profile-img" />
                <input type="text" className="share-input-text" placeholder="What's in your mind Vin?"/>
            </div>
            <hr className="share-hr"/>
            <div className="share-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <PermMedia className="share-icon"/>
                        <span className="share-option-text">Photo or Video</span>
                    </div>
                    <div className="share-option">
                        <Label className="share-icon"/>
                        <span className="share-option-text">Tag</span>
                    </div>
                    <div className="share-option">
                        <Room className="share-icon"/>
                        <span className="share-option-text">Location</span>
                    </div>
                    <div className="share-option">
                        <SentimentSatisfiedAlt className="share-icon"/>
                        <span className="share-option-text">Feelings</span>
                    </div>
                </div>
                <div className="share-bottom-right">
                    <button className="share-button">
                        <ShareRounded className="share-button-icon"/>
                        <span className="share-button-text">Share</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
