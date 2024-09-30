import React from 'react'
import './Play.css'

import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const Play = () => {
  return (

        <div className='playvideos'>
            <video controls autoPlay muted src={video1}></video>
            <h3>Best Youtube Channel To learn web development</h3>
            <div className="play-video-info">
                <p>1534353 views &bull; 2 day ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />12</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />save</span>
            </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Great Stack</p>
                     <span>1m Subscribers</span>
                </div>
                    <button>Subscribe</button>
            </div>
                <div className="vid-description">
                <p>Channel that makes learning easy</p>
                <p>Subscribe great stack to watch more tutorial on web development</p>
                <hr />
                <p>143 comments</p>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Miko <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam eaque officia quae! Labore possimus excepturi, reiciendis ut, aspernatur modi odit quas impedit voluptate dolorem nobis nemo odio fugit soluta.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>2333</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Miko <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam eaque officia quae! Labore possimus excepturi, reiciendis ut, aspernatur modi odit quas impedit voluptate dolorem nobis nemo odio fugit soluta.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>2333</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Miko <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam eaque officia quae! Labore possimus excepturi, reiciendis ut, aspernatur modi odit quas impedit voluptate dolorem nobis nemo odio fugit soluta.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>2333</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Miko <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam eaque officia quae! Labore possimus excepturi, reiciendis ut, aspernatur modi odit quas impedit voluptate dolorem nobis nemo odio fugit soluta.</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>2333</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>

                </div>
        </div>


  )
}

export default Play