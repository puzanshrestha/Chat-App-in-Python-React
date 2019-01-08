import React, {Component, Fragment} from "react";
import {connect} from "react-redux"
import {Tab, Tabs} from '@material-ui/core';

class ChatNavigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        }
    }

    render() {
        return (<Fragment>
            <Tabs
                value={this.state.tabIndex}
            >
                <Tab
                    disableRipple
                    label="Tab 1"
                    onClick={() => {
                        this.setState({tabIndex: 0})
                    }}

                />
                <Tab
                    disableRipple
                    label="Tab 2"
                    onClick={() => {
                        this.setState({tabIndex: 1})
                    }}
                />
                <Tab
                    disableRipple
                    label="Tab 3"
                    onClick={() => {
                        this.setState({tabIndex: 2})
                    }}
                />
            </Tabs>
        </Fragment>)
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatNavigation)