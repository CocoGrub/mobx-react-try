import React,{useContext} from 'react'
import {useObserver, Observer, observer} from "mobx-react-lite";
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
import { Image, Button, Space } from 'antd';

import {StoreContext} from "../index";
import appStore from "../store";


const ImageController =observer(()=>{

    const store = useContext(StoreContext)
    return (
        <div className={'image-controller'}>
            <Space size={12} style={{margin: '0, auto',flexDirection:'column', position:'relative'}} >
                <Image
                    src={store.imageUrl}
                    alt={"face-img"}
                    preview={false}
                />

                <Space style={{display:'flex', justifyContent:'space-around'}}>

                <Button
                    icon={<LeftOutlined />}
                    type="primary"
                    disabled={store.prevButtonDisable}

                    onClick={() => {
                        store.nextImage('prev')
                    }}
                >
                 PREV
                </Button> <Button
                    icon={<RightOutlined />}
                    type="primary"
                    onClick={() => {
                        store.nextImage()
                    }}
                >
                    NEXT
                </Button>
                </Space>
            </Space>
        </div>
    )
})

export default ImageController