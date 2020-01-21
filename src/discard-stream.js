var stream = require('stream');
var util = require('util');

function WritableDiscardStream(cb) {
    this.writable = true;
    this.length = 0;
    this.cb = cb;
}

util.inherits(WritableDiscardStream, stream.Stream);

WritableDiscardStream.prototype.write = function (data, enc) {

    this.length += data.length;
    return true;
};

WritableDiscardStream.prototype.end = function (data) {

    if (data) {
        this.length += data.length;
    }
    this.writable = false;

    if (this.cb) {
        this.cb({size: this.length});
    }

};

WritableDiscardStream.prototype.destroy = function () {
};


module.exports = WritableDiscardStream;