# install-g -- npm install -g {pkg}

One can insist to automatically npm-install a package globally.

## Use

1. Add `install-g` to your `package.json` dependencies or devDependencies.
2. Add `"scripts": { "install": "./node_modules/.bin/install-g || true" }`

As a result, any package using your package as a dependency would trigger its global installation.
Use of devDependencies is recommended.  It makes `install-g` optional with `npm i --production`.

Because the install script is followed by `|| true`, non-zero exitcodes will be ignored.
Thus a missing `./node_modules/.bin/install-g` won't be a problem.  Nor will other possible errors
such as the currently usupported `sudo` cause the install to fail.  The error will still print
to stderr, but a failed global install will not break the local install.

## Why

Need not ask "please install {something} globally" - it just happens...
See [bon](https://github.com/orlin/bon) for example use.

## License

[MIT](http://orlin.mit-license.org)
