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
  
- See [Uptobox-CLI](https://github.com/vic-blt/uptobox-cli)

## Methods

- [`list`](https://docs.uptobox.com/?javascript#retrieve-files-and-folders)

- [`getDownloadLink`](https://docs.uptobox.com/?javascript#generate-a-download-link)

- [`getStreamingLink`](https://docs.uptobox.com/?javascript#get-a-pin)

- [`getUserData`](https://docs.uptobox.com/?javascript#retrieve-user-data)

- `addFile`

- [`updateFile`](https://docs.uptobox.com/?javascript#update-file-informations)

- [`updateFilesPublic`](https://docs.uptobox.com/?javascript#update-multiple-file-39-s-public-option)

- [`convertPoints`](https://docs.uptobox.com/?javascript#point-conversion)

- [`createVoucher`](https://docs.uptobox.com/?javascript#create-voucher)

- [`setSSL`](https://docs.uptobox.com/?javascript#ssl-download)

- [`setSecurityLock`](https://docs.uptobox.com/?javascript#security-lock)

- [`setDirectDL`](https://docs.uptobox.com/?javascript#direct-download)

- [`moveFolder`](https://docs.uptobox.com/?javascript#move-a-folder-to-another-location)

- [`moveFiles`](https://docs.uptobox.com/?javascript#move-one-or-multiple-files-to-another-location)

- [`copyFiles`](https://docs.uptobox.com/?javascript#copy-one-or-multiple-files-to-another-location)

- [`renameFolder`](https://docs.uptobox.com/?javascript#rename-a-folder)

- [`createFolder`](https://docs.uptobox.com/?javascript#create-a-folder)

- [`deleteFiles`](https://docs.uptobox.com/?javascript#delete-one-or-multiple-files)

- [`deleteFolder`](https://docs.uptobox.com/?javascript#delete-a-folder)


## Documentations

- [Uptobox API Docs](https://docs.uptobox.com/)

## Dependencies

- [querystring](https://www.npmjs.com/package/querystring)
- [axios](https://www.npmjs.com/package/axios)