import React, { Component } from 'react';
import { Collapse, Button } from 'react-bootstrap';


class Collapse1 extends Component {
    // toggle = React.createRef();
     
    constructor(props) {
        super(props);
        this.toggle = React.createRef();
        this.scroll = React.createRef();
        this.state = {
            open: false
        };
    }
    timeout(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async scrollToRef(ref){ await this.timeout(350);window.scrollTo(0, this.toggle.current.offsetTop) };
    render() {
        return (
            <div ref={this.toggle} className=" mt-5 d-flex flex-column flex-wrap align-content-center" >
                <Button id="add_id"
                    
                    onClick={() => {
                        this.setState(prevState => ({
                            open: !prevState.open
                        }));
                        // console.log("----------");
                        this.scrollToRef(this.scroll);
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open} >{this.state.open ? 'X' :'+ Add New User'}</Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text" ref={this.scroll}>{this.props.children}</div>
                </Collapse>
            </div>
        )
    }
};


export default Collapse1;