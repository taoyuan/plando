// Original author
// http://dailyjs.com/2013/11/14/mocha-assertion-counting/

var assert = require('assert');
var deprecate = require('depd')('plando')

exports = module.exports = plan;
exports.plan = deprecate.function(plan, 'ok: Use require(\'plando\')(count, done)');

function plan(count, done) {
    if (0 === count) return done();

    function ok(expression) {
        assert(expression);
        if (count === 0) {
            assert(false, 'Too many assertions called');
        } else {
            count--;
        }

        if (count === 0) {
            done();
        }
    }

    function d() {
        return ok(true);
    }

    d.ok = ok;
    d.check = deprecate.function(d, 'check: Use returned function');
    return d;
}

