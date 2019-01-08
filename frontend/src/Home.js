import React, {Component, Fragment} from "react";
import {
    Typography, ListItem, ListItemText, Button, Paper,
} from "@material-ui/core"

import {Link} from "react-router-dom"
import {connect} from "react-redux";
import Navigation from "./Navigation";
import ChatNavigation from "./ChatNavigation"


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatRoomList: ["aaa", "bbb", "cccc", "dddd"]
        }
    }

    renderChatRoomList() {
        var listItems = [];
        this.state.chatRoomList.map((data) => {
                console.log(data)
                listItems.push(
                    <ListItem style={{display: 'flex', flex: 1, flexDirection: 'vertical'}}>
                        <Link to={{pathname: '/main', chatRoom: data}}>
                            <Button style={{display: 'flex', flex: 1, justifyContent: 'flex-start', textTransform: 'none'}}>
                                <ListItemText
                                    primary={data} style={{display: 'flex', flex: 1, justifyContent: 'flex-start'}}/>
                            </Button>
                        </Link>
                    </ListItem>
                )
            }
        )

        return listItems;
    }

    render() {

        return (
            <Fragment>
                <Navigation/>
                <div>
                    <Paper>
                        <Typography variant={'h6'} style={{padding: 15}}>Chatrooms</Typography>
                        {this.renderChatRoomList()}
                    </Paper>
                </div>
                <ChatNavigation/>
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {}
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

