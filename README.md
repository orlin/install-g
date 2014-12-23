# install-g -- npm install -g {}

One can insist to automatically npm-install a package globally.

[![NPM](https://nodei.co/npm/install-g.png?mini=true)](https://www.npmjs.org/package/install-g)

## Use

1. Add `install-g` to your `package.json` dependencies.
2. Add `"scripts": { "install": "node_modules/.bin/install-g || true" }`

As a result, any package using your package as a dependency would trigger its global installation.
Use of devDependencies isn't recommended, unless your project is private.
If you publish it on npm and others end up depending on it -- it will not install automatically...

Because the install script is followed by `|| true`, non-zero exitcodes will be ignored.
Thus a missing `./node_modules/.bin/install-g` won't be a problem.  Nor will other possible errors
such as the currently usupported `sudo` cause the install to fail.  The error will still print
to stderr, but a failed global install will not break the local install.
I'm not sure if Windows can take the `|| true` though.

Also note the use of `install` (i.e. `post-install`) rather than `pre-install`.
If people run `install -g` on your package it will install once rather than twice.

## Why

Need not ask "please install {something} globally" - it just happens...
See [install-g's dependents](https://www.npmjs.org/package/install-g) for example.

## Testing [![Build Status](https://img.shields.io/travis/orlin/install-g.svg?style=flat)](http://travis-ci.org/orlin/install-g)

```sh
batshit test
```

## License

[MIT](http://orlin.mit-license.org)
