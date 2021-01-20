import './App.css';
import ImageController from "./components/ImageController";
import Comments from "./components/Comments";
import {Card} from 'antd'

function App() {

return(
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
       <Card>
           <ImageController/>
           <Comments/>
       </Card>

    </div>
    )


}

export default App;
