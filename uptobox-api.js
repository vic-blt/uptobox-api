const axios = require('axios');
const querystring = require('querystring');

const urls = {
    files:    'https://uptobox.com/api/user/files',
    export:   'https://uptobox.com/api/user/files/all',
    account:  'https://uptobox.com/api/user/me',
    settings: 'https://uptobox.com/api/user/settings',
    lock:     'https://uptobox.com/api/user/securityLock',
    convert:  'https://uptobox.com/api/user/requestPremium',
    voucher:  'https://uptobox.com/api/user/createVoucher',
    pin:      'https://uptobox.com/api/user/pin/validate',
    stream:   'https://uptobox.com/api/streaming',
    download: 'https://uptobox.com/api/link',
    upload:   'https://uptobox.com/api/upload',
    info:     'https://uptobox.com/api/link/info'
};

let exportAll = token => axios.get(`${urls.export}?token=${token}`);

let addFile = (file_code, xfss) => axios.post(`https://uptobox.com/${file_code}?add-to-account`, null, {
    headers: {'Cookie': `xfss=${xfss}`},
    withCredentials: true
});

let getUserData = token => axios.get(`${urls.account}?token=${token}`);

let setSSL = (token, ssl) => axios({
    method: 'PATCH',
    url: urls.settings,
    data: {token, ssl}
});

let setDirectDL = (token, directDownload) => axios({
    method: 'PATCH',
    url: urls.settings,
    data: {token, directDownload}
});

let setSecurityLock = (token, securityLock) => axios({
    method: 'PATCH',
    url: urls.lock,
    data: {token, securityLock}
});

let convertPoints = (token, points) => axios({
    method: 'POST',
    url: urls.convert,
    data: {token, points}
});

let createVoucher = (token, time, quantity) => axios({
    method: 'POST',
    url: urls.voucher,
    data: {token, time, quantity}
});

let getDownloadLink = options => axios.get(`${urls.download}?${querystring.stringify(options)}`);

let getStreamingLink = options => axios.get(`${urls.stream}?${querystring.stringify(options)}`);

let validatePin = (token, pin) => axios.post(`${urls.pin}?token=${token}`, {pin});

let list = options => axios.get(`${urls.files}?${querystring.stringify(options)}`);

let updateFile = ({token, file_code, new_name, description, password, public}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {token, file_code, new_name, description, password, public}
});

let updateFilesPublic = (token, file_codes, public) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {token, file_codes, public}
});

let moveFolder = (token, fld_id, destination_fld_id) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {token, fld_id, destination_fld_id, action: 'move'}
});

let moveFiles = (token, file_codes, destination_fld_id) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {token, file_codes, destination_fld_id, action: 'move'}
});

let copyFiles = (token, file_codes, destination_fld_id) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {token, file_codes, destination_fld_id, action: 'copy'}
});

let renameFolder = (token, fld_id, new_name) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {token, fld_id, new_name}
});

let createFolder = (token, path, name) => axios({
    method: 'PUT',
    url: urls.files,
    data: {token, path, name}
});

let deleteFiles = (token, file_codes) => axios({
    method: 'DELETE',
    url: urls.files,
    data: {token, file_codes}
});

let deleteFolder = (token, fld_id, force = false) => axios({
    method: 'DELETE',
    url: urls.files,
    data: {token, fld_id, ...force && {force}}
});

let getUploadUrl = token => axios({
    method: 'GET',
    url: urls.upload,
    data: {token}
});

let uploadFile = (url, data, headers) => axios({
    method: 'POST',
    url,
    data,
    headers
});

let getFilesDetails = file_codes => axios({
    method: 'GET',
    url: `${urls.info}?fileCodes=${file_codes}`
});

module.exports = { exportAll, addFile, getUserData, setSSL, setDirectDL, setSecurityLock, convertPoints, createVoucher, getDownloadLink, getStreamingLink, validatePin, list, updateFile, updateFilesPublic, moveFolder, moveFiles, copyFiles, renameFolder, createFolder, deleteFiles, deleteFolder, getUploadUrl, uploadFile, getFilesDetails };
