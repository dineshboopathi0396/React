import React from "react";

function Functionalprops(props) {
    return (
        <div>
            <h3>This is a Functional Component.</h3>
            <h3>Hello {props.name} from {props.place}</h3>
        </div>
    );
}

export default Functionalprops;