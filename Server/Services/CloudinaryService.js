var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'debugger',
    api_key: '763971574646276',
    api_secret: '4QHvrTU62FcNvSuF-dK8s3ffR6g'
});

exports.uploadToCloud = function(filename){
    return new Promise(resolve => {
        cloudinary.uploader.upload(filename, function(result) 
        { 
            resolve({url: result.url, ID: result.public_id});
        });
    });
}

exports.deleteFromCloud = function(publicID){
    return new Promise(resolve => {
        cloudinary.uploader.destroy(publicID, function(result){
            resolve(result);
        });
    });
}