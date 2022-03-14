import React from "react";
import './descript.css';

class Descript extends React.Component<{ name: string }> {

    render() {
        return <div className="descript-container">
            {this.props.name}
        </div>;

    }
}

export default Descript