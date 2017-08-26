# Serverless-side rendering
Simple serverless application for performing SSR

## Usage

First, install serverless and set up your AWS credentials

```sh
  git clone https://github.com/melonmanchan/serverless-side-rendering
  cd serverless-side-rendering
  npm i
  serverless publish

  ...

  curl https://your-aws-url.execute-api.us-eas-1.amazonaws.com/dev/render?url=https://github.com
```
