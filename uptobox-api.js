const axios = require('axios');
const querystring = require('querystring');

const urls = {
    files:    'https://uptobox.com/api/user/files',
    account:  'https://uptobox.com/api/user/me',
    settings: 'https://uptobox.com/api/user/settings',
    lock:     'https://uptobox.com/api/user/securityLock',
    convert:  'https://uptobox.com/api/user/requestPremium',
    voucher:  'https://uptobox.com/api/user/createVoucher',
    stream:   'https://uptobox.com/api/streaming',
    download: 'https://uptobox.com/api/link'
}

let addFile = ({url, xfss}) => axios.post(url, null, {
    headers: {'Cookie': xfss},
    withCredentials: true
});

let getAccount = token => axios.get(`${urls.account}?token=${token}`);

let setSSL = ({token, is_ssl}) => axios({
    method: 'PATCH',
    url: urls.settings,
    data: {
        token: token,
        ssl: is_ssl
    }
});

let setDirectDL = ({token, is_direct}) => axios({
    method: 'PATCH',
    url: urls.settings,
    data: {
        token: token,
        directDownload: is_direct
    }
});

let setSecurityLock = ({token, is_locked}) => axios({
    method: 'PATCH',
    url: urls.lock,
    data: {
        token: token,
        securityLock: is_locked
    }
});

let convertPoints = ({token, points}) => axios({
    method: 'POST',
    url: urls.convert,
    data: {
        token: token,
        points: points
    }
});

let createVoucher = ({token, time, quantity}) => axios({
    method: 'POST',
    url: urls.voucher,
    data: {
        token: token,
        time: time,
        quantity: quantity
    }
});

let getDownloadLink = options => axios.get(`${urls.download}?${querystring.stringify(options)}`);

let listFiles = options => axios.get(`${urls.files}?${querystring.stringify(options)}`);

let updateFileProperties = ({token, file_code, new_name, description, password, is_public}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {
        token: token,
        file_code: file_code,
        new_name: new_name,
        description: description,
        password: password,
        public: is_public
    }
});

let updateFilesPublicProperty = ({token, file_codes, is_public}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {
        token: token,
        file_codes: file_codes,
        public: is_public
    }
});

let moveFolder = ({token, folder_id, new_parent_id}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {
        token: token,
        fld_id: folder_id,
        destination_fld_id: new_parent_id,
        action: 'move'
    }
});

let moveFiles = ({token, file_codes, new_parent_id}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {
        token: token,
        file_codes: file_codes,
        destination_fld_id: new_parent_id,
        action: 'move'
    }
});

let copyFiles = ({token, file_codes, new_parent_id}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {
        token: token,
        file_codes: file_codes,
        destination_fld_id: new_parent_id,
        action: 'copy'
    }
});

let renameFolder = ({token, folder_id, new_name}) => axios({
    method: 'PATCH',
    url: urls.files,
    data: {
        token: token,
        fld_id: folder_id,
        new_name: new_name
    }
});

let createFolder = ({token, path, name}) => axios({
    method: 'PUT',
    url: urls.files,
    data: {
        token: token,
        path: path,
        name: name
    }
});

let deleteFiles = ({token, file_codes}) => axios({
    method: 'DELETE',
    url: urls.files,
    data: {
        token: token,
        file_codes: file_codes
    }
});

let deleteFolder = ({token, folder_id}) => axios({
    method: 'DELETE',
    url: urls.files,
    data: {
        token: token,
        fld_id: folder_id
    }
});

let getStreamingLink = options => axios.get(`${urls.stream}?${querystring.stringify(options)}`);

module.exports = { addFile, getAccount, setSSL, setDirectDL, setSecurityLock, convertPoints, createVoucher, getDownloadLink, listFiles, updateFileProperties, updateFilesPublicProperty, moveFolder, moveFiles, copyFiles, renameFolder, createFolder, deleteFiles, deleteFolder, getStreamingLink };
