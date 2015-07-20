# plando
> Count assertions and call function at the end.

## USAGE

```js
var pd = require('plando');

it('should be able to wait for two events', function(done) {
  var d = pd(2, done);

  setTimeout(function() {
    d.ok(true);
  }, 20);

  setTimeout(function() {
    d();
  }, 10);
});
```

## LICENSE

MIT
