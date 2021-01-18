import './App.css';
import {useObserver} from 'mobx-react-lite'
import appStore from "./store";
import {useContext} from "react";
function App() {
  const store = useContext(appStore)
  return useObserver(()=>(

      <div className="App">
        <img src={store.imageUrl} alt={"face-img"}/>
      </div>
  ))
}

export default App;
