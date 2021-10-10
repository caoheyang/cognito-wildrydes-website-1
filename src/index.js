/*
 *   Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home, MainApp, Profile, HelloWorld } from "./pages";
import { SignIn, SignOut } from "./auth";
import "normalize.css";

import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./amplify-config";

Amplify.configure(awsConfig);

async function getUserInfo() {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch (e) {
    Auth.federatedSignIn();
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getUserInfo() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/helloworld" component={HelloWorld} />
          <PrivateRoute path="/app" component={MainApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
