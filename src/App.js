import './App.css';
import {useObserver} from 'mobx-react-lite'
import {LeftOutlined} from '@ant-design/icons'
import {useContext} from "react";
import {StoreContext} from "./index";
import ImageController from "./components/ImageController";

function App() {

return(
    <div className="App">
        <ImageController/>
    </div>
    )


}

export default App;
