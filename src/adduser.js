var registry = require('./registry/registry')

module.exports = function(callback) {
    registry.adduser(null, function(err) {
        if(callback && typeof callback === 'function') {
            err ? callback(err) : callback(null);
        } else {
            if(err) {
                throw err;
            } else {
                console.log('user added');
            }
        }
    });
}
