import React, { useState } from "react";
import {Auth, API } from "aws-amplify";
import Amplify from "aws-amplify";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

const apiName = "WildRydesAPI";

function HelloWorld(props) {
  
  const [response, setResponse] = useState("Not Request");

  const postHelloWorld = async () => {
    Amplify.Logger.LOG_LEVEL = "DEBUG";
    const session = await Auth.currentSession();
    console.log(session)
    const apiRequest = {
      body: {},
      headers: {
        "Content-Type": "application/json",
        //"Authorization":  session.getIdToken().getJwtToken()
      },
    };
    console.log("API Request:getJwtToken",  session.getIdToken().getJwtToken());
   
    return await API.post(apiName, "/helloworld", apiRequest);
  };

  const onClick = async () => {
    let resp = await postHelloWorld();
    console.log(resp);
    setResponse(resp["message"]);
  };

  const divStyle = {
    color: "#FFF",
    background: "#000",
    padding: "2.5rem 0",
    textAlign: "center",
  };
  return (
    <div>
      <SiteNav />
      <div style={divStyle} className="row column">
        <button onClick={onClick}>Request</button>
        <h1>{response}</h1>
      </div>
      <SiteFooter />
    </div>
  );
}

export default HelloWorld;
