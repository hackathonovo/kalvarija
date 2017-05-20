var uploadFolder = get("UPLOAD_FOLDER");
var imagesFolderUrl = get('IMAGES_FOLDER_URL');
var port = get("PORT");

var enableApiAuth = get("ENABLE_API_AUTH");

var connectionStrings = {
    local: get("LOCAL_DATABASE_URL"),
    release: get("RELEASE_DATABASE_URL")
}
var secret = get("SECRET")

function get(key){
    var setting = process.env[key];
    if(setting == null)
        throw new Error(`Crashing application - environment variable "${key}" is missing.`);

    if(setting == "true" || setting == "false")
        return (setting == "true")
    
    return setting;
}


module.exports = {
    enableApiAuth,
    connectionStrings,
    uploadFolder,
    imagesFolderUrl,
    port,
    secret
};
