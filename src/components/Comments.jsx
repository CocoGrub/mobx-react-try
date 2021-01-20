import React,{useContext} from "react";
import {observer, useLocalObservable, useLocalStore} from "mobx-react-lite";
import {StoreContext} from "../index";
import {List, Input, Space} from "antd";

const Comments= observer(()=>{
    const state=useContext(StoreContext)
    const input = useLocalObservable(() => ({
        value: '',
        increaseTimer(e) {
            this.value=e.target.value
        }
    }))

    return(
        <div style={{margin:'0,auto'}}>
            <div className={'comments-list'} style={{ margin:'1rem 0',textAlign:'left'}}>
                <label htmlFor={'comment'}>Post a comment</label>
                <Input name={'comment'} value={input.value} onChange={(e)=>{input.increaseTimer(e)}}/>
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