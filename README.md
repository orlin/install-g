# install-g -- npm install -g {pkg}

One can insist to automatically npm-install a package globally.

## Use

1. Add `install-g` to your `package.json` dependencies.
2. Add `"scripts": { "install": "./node_modules/.bin/install-g" }`

As a result, any package using your package as a dependency would trigger its global installation.

## Why

Need not ask "please install {something} globally" - it just happens...
See [bon](https://github.com/orlin/bon) for example use.

## License

[MIT](http://orlin.mit-license.org)
