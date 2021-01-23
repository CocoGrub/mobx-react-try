import React,{useContext} from "react";
import {observer, useLocalObservable} from "mobx-react-lite";
import {StoreContext} from "../index";
import {List, Input, Button} from "antd";

const Comments= observer(()=>{
    const state=useContext(StoreContext)
    const input = useLocalObservable(() => ({
        value: '',
        setValue(e) {
            this.value=e.target.value

        }

    }))
const  sendComment=()=>{
        state.pushComment(input.value)
        input.value=''
    }
    return(
        <div style={{margin:'0,auto'}}>
            <div className={'comments-list'} style={{ margin:'1rem 0',textAlign:'left'}}>
                    <label htmlFor={'comment'}>Post a comment</label>
                <div style={{display:'flex'}}>
                    <Input className={'comment'} name={'comment'} value={input.value} onChange={(e)=>{input.setValue(e)}}/>
                    <Button onClick={()=>sendComment(input.value)}>POST</Button>
                </div>

            </div>

            <List
                size="small"
                bordered
                itemLayout="horizontal"
                dataSource={state.comments}
                renderItem={listing => (
                    <List.Item>
                        <List.Item.Meta title={listing} />
                    </List.Item>
                )}
            />



        </div>

    )
})

export default Comments