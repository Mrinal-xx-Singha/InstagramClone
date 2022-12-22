import React from 'react';
import './Post.css';
import Avatar from "@mui/material/Avatar";


function Post() {
  return (
        <div className='post'>
        <Avatar
            className="Post_Avatar"
            alt="MrinalSingha"
            src="/static/images/avatar/1.jpg"
         />
        <h3>username</h3>
      {/* {Header -> avatar + username} */}

        <img className='post_image' src='https://www.giantfreakinrobot.com/wp-content/uploads/2021/11/attack-on-titan-season-4-900x510.jpg' alt=''></img>
      {/* {Image} */}

        <h4 className="Post_text"><strong>MrinalSingha</strong></h4>
      {/* {username + caption} */}
    </div>
  )
}

export default Post;
