// import logo from './logo.svg';
// import './App.css';
import Classprops from "./Classprops";
import Functionalprops from "./Functionalprops";

function App() {
    return (
        <div>
            <Classprops name="User 1" place="PlaceX">
                <p>The Child Component</p>
            </Classprops>
            <Classprops name="User 2" place="PlaceY">
                <button>Click</button>
            </Classprops>
            <Classprops name="User 3" place="PlaceZ" />
            <Functionalprops name="Dinesh" place="Chennai"></Functionalprops>
        </div>
    );
}

export default App;