# node-console-dot-trace

[![Downloads][1]][2] [![Version][3]][2] [![ISC License][4]][5] 

[1]: https://img.shields.io/npm/dm/console-dot-trace.svg
[2]: https://www.npmjs.com/package/console-dot-trace

[3]: https://img.shields.io/npm/v/console-dot-trace.svg

[4]: https://img.shields.io/npm/l/console-dot-trace.svg
[5]: http://spdx.org/licenses/ISC

A polyfil for the `console.trace` function you may be used to in the browser.

## Install

    npm install --save-dev console-dot-trace
    
## Usage

All you have to do is require the module. It will make `console.trace` available in your application.

    require('console-dot-trace');
    
Use anywhere in your application as:

    console.trace();
    
You can also name stack traces:

    console.trace('descriptive stack name');
    
## More info

For more inforation on using `console.trace`, see the [Console API](https://developer.chrome.com/devtools/docs/console-api) in teh Chrome Developer Reference.

If you need more adavances or programmatic stack parsing, see [`node-stack-trace`](https://github.com/felixge/node-stack-trace).

## License

[ISC](http://spdx.org/licenses/ISC)
