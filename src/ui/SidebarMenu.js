
import React from 'react';


export class SidebarMenu extends React.Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }


    onClick(e) {
        this.props.onClick(e);
    }
    
    render() {
        return (
            <div onClick={this.onClick} className="sb-menu">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default SidebarMenu;