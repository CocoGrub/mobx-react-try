import React,{useContext} from 'react'
import {observer} from "mobx-react-lite";
import {StoreContext} from "../index";
import {CommentOutlined, DislikeOutlined, HeartOutlined, LikeOutlined} from "@ant-design/icons";

const LikesSection=observer(()=>{
  const state=useContext(StoreContext)
    return <div>
        <div style={{display:"flex",justifyContent:'space-between',marginTop:'1em'}}>
            <div>
                <LikeOutlined onClick={()=>state.likeThis(1)} style={{marginRight:'0.5em'}}/>
                <DislikeOutlined onClick={()=>state.likeThis()} style={{marginLeft:'0.5em'}} />
            </div>

            <div style={{cursor:'pointer'}} onClick={()=>document.getElementsByClassName('comment')[0].focus()}>
                <CommentOutlined /> comment THIS!
            </div>
        </div>
            <div style={{display:"flex",justifyContent:'space-between', marginTop:'1em'}}>
                <div><HeartOutlined/> {state.likes}</div>
                <div>{state.commentsCount} comments</div>
            </div>

    </div>
})

export default LikesSection