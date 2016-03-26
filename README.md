# node-console-dot-trace

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
