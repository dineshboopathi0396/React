// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from "./Components/FunctionalComp";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import ClickComp from "./Components/Click";
import CounterComp from "./Components/Counter";
import ParentComp from "./Components/ParentComp";

function App() {
    return (
        <div>
            <h1>asdasasasd</h1>
            <FunctionalComp></FunctionalComp>
            <ClassComp />
            <ClassComp1 />
            <ClickComp />
            <CounterComp />
            <ParentComp />
        </div>
    );
}

export default App;