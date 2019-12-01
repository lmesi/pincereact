import React from 'react';
import {Toolbar, Page, Button} from 'react-onsenui';

import Login from './Login'

export default class Home extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: Login});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Home page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push Login</Button>
        </p>
      </Page>
    );
  }
}