var DiscardStream = require('./discard-stream.js');

function DiscardStorage(opts) {
}


DiscardStorage.prototype._handleFile = function _handleFile(req, file, cb) {

    var discardStream = new DiscardStream(function (result) {
        cb(null,
            {size: result.size});
    });

    file.stream.pipe(discardStream);
}

DiscardStorage.prototype._removeFile = function _removeFile(req, file, cb) {
    delete file.buffer
    cb(null)
}

module.exports = function (opts) {
    return new DiscardStorage(opts)
}