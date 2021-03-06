# node-console-dot-trace

[![Downloads][1]][2] [![Version][3]][2] [![ISC License][4]][5] 

[1]: https://img.shields.io/npm/dm/console-dot-trace.svg
[2]: https://www.npmjs.com/package/console-dot-trace

[3]: https://img.shields.io/npm/v/console-dot-trace.svg

[4]: https://img.shields.io/npm/l/console-dot-trace.svg
[5]: http://spdx.org/licenses/ISC

A polyfill for the `console.trace` function you may be used to in the browser.

## Install

    npm install --save-dev console-dot-trace
    
## Usage

All you have to do is require the module and execute it. It will make `console.trace` available in your application.

```javascript
require('console-dot-trace')();
```

Use anywhere in your application as:

```javascript
console.trace();
```

You can also name stack traces:

```javascript
console.trace('descriptive stack name');
```

Prefer not to modify the native `console` object?

```javascript
var trace = require('console-dot-trace').trace;
trace('descriptive stack name');
```

## More info

For more information on using `console.trace`, see the [Console API](https://developer.chrome.com/devtools/docs/console-api) in the Chrome Developer Reference.

If you need more advances or programmatic stack parsing, see [`node-stack-trace`](https://github.com/felixge/node-stack-trace).

## License

[ISC](http://spdx.org/licenses/ISC)
