import React, { useEffect } from "react";
import { Auth } from "aws-amplify";

function SignOut() {
  useEffect(() => {
    Auth.signOut();
  }, []);

  return <></>;
}

export default SignOut;
