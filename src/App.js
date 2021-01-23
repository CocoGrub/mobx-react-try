import './App.css';
import ImageController from "./components/ImageController";
import Comments from "./components/Comments";
import {Card} from 'antd'
import LikesSection from "./components/LikesSection";

function App() {

return(
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
       <Card>
           <ImageController/>
           <LikesSection/>
           <Comments/>
       </Card>

    </div>
    )


}

export default App;
