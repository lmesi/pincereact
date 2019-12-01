import React from 'react';
import {Toolbar, Page, Button} from 'react-onsenui';

import Home from './Home'

export default class Login extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: Home});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Login page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push Home</Button>
        </p>
      </Page>
    );
  }
}