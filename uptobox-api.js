const got = require('got')

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
    info:     'https://uptobox.com/api/link/info',
    public:   'https://uptobox.com/api/user/public',
    add:      'https://uptobox.com/api/user/file/alias'
}

/**
 * Get a list of all files on your account
 * @param {string} token
 * @returns Promise
 */
function exportAll(token) {
    return got(urls.export, {searchParams: {token}}).json()
}

/**
 * Add an uptobox file to your account
 * @param {string} token
 * @param {string} file_code
 * @returns Promise
 */
function addFile(token, file_code) {
    return got(urls.add, {searchParams: {token, file_code}}).json()
}

/**
 * Get your account's details
 * @param {string} token
 * @returns Promise
 */
function getUserData(token) {
    return got(urls.account, {searchParams: {token}}).json()
}

/**
 * <b>Requires a premium account</b>
 * <br>Force https protocol when downloading
 * @param {string} token
 * @param {(0|1)} ssl
 * @returns Promise
 */
function setSSL(token, ssl) {
    return got.patch(urls.settings, {json: {token, ssl}}).json()
}

/**
 * <b>Requires a premium account</b>
 * <br>Trigger an immediate download when visiting an uptobox download link
 * @param {string} token
 * @param {(0|1)} directDownload
 * @returns Promise
 */
function setDirectDL(token, directDownload) {
    return got.patch(urls.settings, {json: {token, directDownload}}).json()
}

/**
 * <b>Requires a premium account</b>
 * <br>Show the UTS player miniature when visiting an uptobox download link
 * @param {string} token
 * @param {(0|1)} miniatureUts
 * @returns Promise
 */
function setUptostreamMiniature(token, miniatureUts) {
    return got.patch(urls.settings, {json: {token, miniatureUts}}).json()
}

/**
 * Send you an email when your files are removed from uptobox
 * @param {string} token
 * @param {(0|1)} notifDeletions
 * @returns Promise
 */
function setDeletionNotification(token, notifDeletions) {
    return got.patch(urls.settings, {json: {token, notifDeletions}}).json()
}

/**
 * <b>Requires a premium account</b>
 * <br>Prevent editing of your account's email
 * @param {string} token
 * @param {(0|1)} securityLock
 * @returns Promise
 */
function setSecurityLock(token, securityLock) {
    return got.patch(urls.lock, {json: {token, securityLock}}).json()
}

/**
 * Convert your points into additional premium time
 * | Points  | Premium days |
 * | :------ | :----------  |
 * | 10      | 30           |
 * | 25      | 90           |
 * | 50      | 180          |
 * | 100     | 365          |
 * @param {string} token
 * @param {(10|25|50|100)} points
 * @returns Promise
 */
function convertPoints(token, points) {
    return got.post(urls.convert, {json: {token, points}}).json()
}

/**
 * Create a voucher
 * @param {string} token
 * @param {('30d'|'365d'|'730d')} time
 * @param {number} quantity
 * @returns Promise
 */
function createVoucher(token, time, quantity) {
    return got.post(urls.voucher, {json: {token, time, quantity}}).json()
}

/**
 * Get a download link for an uptobox file
 * @param {object} options
 * @param {string} options.token
 * @param {string} options.file_code
 * @param {string} [options.waitingToken] - Only required for <b>non premium</b> accounts
 * @returns Promise
 */
function getDownloadLink(options) {
    return got(urls.download, {searchParams: options}).json()
}

/**
 * Get streaming links for an uptobox file
 * @param {object} options
 * @param {string} options.token
 * @param {string} options.file_code
 * @param {string} options.pin - Only required for <b>non premium</b> accounts
 * @param {string} options.check - Only required for <b>non premium</b> accounts
 * @returns Promise
 */
function getStreamingLink(options) {
    return got(urls.stream, {searchParams: options}).json()
}

/**
 * Validate an uptobox pin code
 * @param {string} token
 * @param {string} pin
 * @returns Promise
 */
function validatePin(token, pin) {
    return got.post(urls.pin, {
        searchParams: {token},
        json: {pin}
    }).json()
}

/**
 * List files
 * @param {object} options
 * @param {string} options.token
 * @param {('file'|'folder')} options.type
 * @param {string} options.path
 * @param {number} options.limit - From 1 to 100
 * @param {number} options.offset
 * @param {('file_name'|'file_size'|'file_created'|'file_downloads'|'transcoded')} options.orderBy
 * @param {('asc'|'desc')} options.dir
 * @param {string} options.search - Search content if searchField is provided
 * @param {('file_name'|'file_size'|'file_created'|'file_downloads'|'transcoded')} options.searchField
 * @param {(0|1)} options.exactSearch - Search should match with the exact value only
 * @param {(0|1)} options.currentFolderSearch - Search in current folder only
 * @param {(0|1)} options.oldSearch - Use old search engine
 * @returns Promise
 */
function list(options) {
    return got(urls.files, {searchParams: options}).json()
}

/**
 * Update a file details
 * @param {object} options
 * @param {string} options.token
 * @param {string} options.file_code
 * @param {string} [options.new_name]
 * @param {string} [options.description]
 * @param {string} [options.password]
 * @param {(0|1)} [options.public]
 * @returns Promise
 */
function updateFile(options) {
    return got.patch(urls.files, {json: options}).json()
}

/**
 * Update files' public status
 * @param {string} token
 * @param {string} file_codes
 * @param {(0|1)} public
 * @returns Promise
 */
function updateFilesPublic(token, file_codes, public) {
    return got.patch(urls.files, {json: {token, file_codes, public}}).json()
}

/**
 * Move a folder to another folder
 * @param {string} token
 * @param {number} fld_id
 * @param {number} destination_fld_id
 * @returns Promise
 */
function moveFolder(token, fld_id, destination_fld_id) {
    return got.patch(urls.files, {json: {token, fld_id, destination_fld_id, action: 'move'}}).json()
}

/**
 * Move file(s) to a folder
 * @param {string} token
 * @param {string} file_codes
 * @param {number} destination_fld_id
 * @returns Promise
 */
function moveFiles(token, file_codes, destination_fld_id) {
    return got.patch(urls.files, {json: {token, file_codes, destination_fld_id, action: 'move'}}).json()
}

/**
 * Copy file(s) to a folder
 * @param {string} token
 * @param {string} file_codes
 * @param {number} destination_fld_id
 * @returns Promise
 */
function copyFiles(token, file_codes, destination_fld_id) {
    return got.patch(urls.files, {json: {token, file_codes, destination_fld_id, action: 'copy'}}).json()
}

/**
 * Rename a folder
 * @param {string} token
 * @param {number} fld_id
 * @param {string} new_name
 * @returns Promise
 */
function renameFolder(token, fld_id, new_name) {
    return got.patch(urls.files, {json: {token, fld_id, new_name}}).json()
}

/**
 * Create a folder
 * @param {string} token
 * @param {string} path
 * @param {string} name
 * @returns Promise
 */
function createFolder(token, path, name) {
    return got.put(urls.files, {json: {token, path, name}}).json()
}

/**
 * Delete file(s)
 * @param {string} token
 * @param {string} file_codes
 * @returns Promise
 */
function deleteFiles(token, file_codes) {
    return got.delete(urls.files, {json: {token, file_codes}}).json()
}

/**
 * Delete a folder
 * @param {string} token
 * @param {number} fld_id
 * @param {boolean} force
 * @returns Promise
 */
function deleteFolder(token, fld_id, force = false) {
    return got.delete(urls.files, {json: {token, fld_id, ...force && {force}}}).json()
}

/**
 * Get an URL to which you can upload data
 * @param {string} token
 * @returns Promise
 */
function getUploadUrl(token) {
    return got(urls.upload, {searchParams: {token}}).json()
}

/**
 * Upload a file
 * @param {string} url - An URL generated by {@link getUploadUrl}
 * @param {FormData} body - Data to upload
 * @returns Promise
 */
function uploadFile(url, body) {
    return got.post(url, {body})
}

/**
 * Get files details
 * @param {string} fileCodes - One or multiple file codes separated by ',' (up to 100 items)
 * <br>For each file code provided, you can add a password separated by ':'
 * <br>For example : filecode1:password1,filecode2:password2
 * @returns Promise
 */
function getFilesDetails(fileCodes) {
    return got(urls.info, {searchParams: {fileCodes}}).json()
}

/**
 * Get files from public folder
 * @param {number} folder - Folder id
 * @param {string} hash - Folder hash
 * @param {number} limit - Number of files to retrieve
 * @param {number} offset - Retrieve from the specified offset
 * @returns Promise
 */
function getPublicFolderContent(folder, hash, limit, offset) {
    return got(urls.public, {searchParams: {folder, hash, limit, offset}}).json()
}

module.exports = { exportAll, addFile, getUserData, setSSL, setDirectDL, setSecurityLock, convertPoints, createVoucher, getDownloadLink, getStreamingLink, validatePin, list, updateFile, updateFilesPublic, moveFolder, moveFiles, copyFiles, renameFolder, createFolder, deleteFiles, deleteFolder, getUploadUrl, uploadFile, getFilesDetails, getPublicFolderContent, setUptostreamMiniature, setDeletionNotification }
