import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

class LeftList extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false,
        }
        this.handleToggle= this.handleToggle.bind(this);
        this.handleNestedListToggle =this.handleNestedListToggle.bind(this);
    }
      handleToggle = () => {
        this.setState({
          open: !this.state.open,
        });
      };
    
      handleNestedListToggle = (item) => {
        this.setState({
          open: item.state.open,
        });
      };
    render() {
        return (
            <div>
                    <List>
                        <Subheader>Nested List Items</Subheader>
                        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                        <ListItem
                            primaryText="Inbox"
                            leftIcon={<ContentInbox />}
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Starred"
                                    leftIcon={<ActionGrade />}
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="Sent Mail"
                                    leftIcon={<ContentSend />}
                                    disabled={true}
                                    nestedItems={[
                                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                    ]}
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="Inbox"
                                    leftIcon={<ContentInbox />}
                                    open={this.state.open}
                                    onNestedListToggle={this.handleNestedListToggle}
                                    nestedItems={[
                                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                    ]}
                                />,
                            ]}
                        />
                    </List>
            </div>
        )
    }
}

export default LeftList