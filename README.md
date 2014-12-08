# install-g -- npm install -g {pkg}

One can insist to automatically npm-install a package globally.

## Use

1. Add `install-g` to your `package.json` dependencies.
2. Add `"scripts": { "install": "./node_modules/.bin/install-g || true" }`

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

## Testing

The tests of modules such as [datomiki](https://github.com/datomicon/datomiki)
will show that it works.  In that case: `datomiki` has a devDependency on `dbin`,
which has a dependency on `datomic-free`, both depending on `bon` -
all three of which are available globally via `install-g`.

## License

[MIT](http://orlin.mit-license.org)
