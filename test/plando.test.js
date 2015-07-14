var p = require('../');

describe('Plan', function () {
    it('should be able to wait for two events', function (done) {
        var plan = p.plan(2, done);
        setTimeout(function () {
            plan.ok(true);
        }, 20);
        setTimeout(function () {
            plan.ok(true);
        }, 10);
    });

    it('should be able to wait for a single event', function (done) {
        var plan = p.plan(1, done);
        setTimeout(function () {
            plan.ok(true);
        }, 50);
    });

    it('should be able to proceed when count=0', function (done) {
        p.plan(0, done);
    });

    it('should throw when any condition is invalid', function (done) {
        var plan = p.plan(2, function () {
        });
        setTimeout(function () {
            plan.ok(true);
        }, 10);
        setTimeout(function () {
            try {
                plan.ok(false);
            } catch (e) {
                done();
            }
        }, 20);
    });
});
