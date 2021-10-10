import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

function SignIn() {
  let history = useHistory();
  useEffect(() => {
    getUserInfo().then((userInfo) => {
      //获取到到用户信息为null，即“未登陆”，跳转到登陆
      console.log(userInfo);
      if (!userInfo) {
        Auth.federatedSignIn();
      } else {
        history.push("/");
      }
    });
  }, [history]);

  async function getUserInfo() {
    let userInfo = null;
    try {
      userInfo = await Auth.currentAuthenticatedUser();
    } catch (e) {
      // This had to be added because Amplify doesn't catch the exception, this means
      // that the user is not logged in, there is other code that redirects to login page.
      console.log("login fail");
    }
    return userInfo;
  }

  return <></>;
}

export default SignIn;
