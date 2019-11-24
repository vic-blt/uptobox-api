# Uptobox API

## Requirement

Retrieve your API token from your Uptobox account : [How to find my API token ?](https://docs.uptobox.com/#how-to-find-my-api-token)

## Install

`npm i uptobox-api`

## Usage

`const uptobox = require('uptobox-api');`

## Examples

- Get download link :

  ```js
  let getDownloadLink = async file_code => (await uptobox.getDownloadLink({
      token: '<YOUR_API_TOKEN>',
      file_code: file_code
  })).data.data.dlLink;
  ```

- Get streaming links :

  ```js
  let getStreamingLink = async file_code => (await uptobox.getStreamingLink({
      token: '<YOUR_API_TOKEN>',
      file_code: file_code
  })).data.data.streamLinks;
  ```

## Documentations

- [Uptobox API Docs](https://docs.uptobox.com/)