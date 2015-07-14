# plando
> Count assertions and call function at the end.

## USAGE

```js
var pd = require('plando');

it('should be able to wait for two events', function(done) {
  var plan = pd.plan(2, done);

  setTimeout(function() {
    plan.ok(true);
  }, 20);

  setTimeout(function() {
    plan.ok(true);
  }, 10);
});
```

## LICENSE

MIT
