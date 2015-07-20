var pd = require('../');

describe('Plan', function () {
    it('should be able to wait for two events', function (done) {
        var d = pd(2, done);
        setTimeout(function () {
            d()
        }, 20);
        setTimeout(function () {
            d()
        }, 10);
    });

    it('should be able to wait for a single event', function (done) {
        var d = pd(1, done);
        setTimeout(function () {
            d()
        }, 50);
    });

    it('should be able to proceed when count=0', function (done) {
        pd(0, done);
    });

    it('should throw when any condition is invalid', function (done) {
        var d = pd(2, function () {
        });
        setTimeout(function () {
            d();
        }, 10);
        setTimeout(function () {
            try {
                d.ok(false);
            } catch (e) {
                done();
            }
        }, 20);
    });
});
