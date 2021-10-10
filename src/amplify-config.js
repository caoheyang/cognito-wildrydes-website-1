// This file is used for manual configuration of the Amplify library.
// When Amplify is used in conjunction with the Amplify CLI toolchain or AWS Mobile Hub to manage backend resources,
// an aws-exports.js file is auto-generated and can be used instead of the below to automatically configure the Amplify library.
// In this workshop, we are using the Amplify client libraries without the CLI toolchain so you should edit this file manually.

const awsConfig = {
  Auth: {
    //identityPoolId: "ap-northeast-1:dffce4c1-b44b-414c-88df-ee326bd460d1", // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
    region: "ap-northeast-1", // example: 'us-east-2'
    userPoolId: "ap-northeast-1_voqcBvtmu", // example: 'us-east-2_teEUQbkUh'
    userPoolWebClientId: "13agp43mnahelvuum2v8a0nsp5", // example: '3k09ptd8kn8qk2hpk07qopr86'

    oauth: {
      domain: "heyang20201209.auth.ap-northeast-1.amazoncognito.com",
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
      redirectSignIn: "http://localhost:3000",
      redirectSignOut: "http://localhost:3000",
      responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
  API: {
    endpoints: [
      {
        name: "WildRydesAPI",
        endpoint:
          "https://cq4lm8igil.execute-api.ap-northeast-1.amazonaws.com/prod", // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
        region: "ap-northeast-1", // example: 'us-east-2'
      },
    ],
  }
};

export default awsConfig;
